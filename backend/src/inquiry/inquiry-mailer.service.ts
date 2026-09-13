import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { escapeHtml } from './utils/sanitize-html';

@Injectable()
export class InquiryMailerService {
  private readonly logger = new Logger(InquiryMailerService.name);

  constructor(private readonly config: ConfigService) {}

  async sendInquiryNotifications(dto: CreateInquiryDto, referenceId: string): Promise<void> {
    const isEnabled = this.config.get<string>('MAIL_DISPATCH_ENABLED') === 'true';
    if (!isEnabled) {
      this.logger.log(
        `[MAIL] Dispatch skipped for reference ${referenceId} (MAIL_DISPATCH_ENABLED is false or unset).`,
      );
      return;
    }

    // Run internal alert and client receipt concurrently without blocking the main event loop
    await Promise.allSettled([
      this.sendInternalAlert(dto, referenceId),
      this.sendClientReceipt(dto, referenceId),
    ]);
  }

  private async sendInternalAlert(dto: CreateInquiryDto, referenceId: string): Promise<void> {
    const adminEmail = this.config.get<string>('ADMIN_NOTIFICATION_EMAIL') || 'admin@markcare.ke';
    const subject = `[New Inquiry] ${dto.type} — ${dto.organization} (${referenceId})`;

    const html = `
      <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #0f172a; max-width: 600px;">
        <h2 style="color: #0284c7; margin-bottom: 4px;">New Facility Inquiry Logged</h2>
        <p style="margin-top: 0; font-size: 12px; color: #64748b;">Ref: <strong>${referenceId}</strong></p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <tr><td style="padding: 6px 0; color: #64748b; width: 140px;">Organization:</td><td><strong>${escapeHtml(dto.organization)}</strong></td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Contact Name:</td><td>${escapeHtml(dto.name)}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Email:</td><td><a href="mailto:${escapeHtml(dto.email)}">${escapeHtml(dto.email)}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Phone:</td><td>${escapeHtml(dto.phone)}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Inquiry Type:</td><td><code>${escapeHtml(dto.type)}</code></td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Facility Scope:</td><td>${escapeHtml(dto.facilityType || 'N/A')}</td></tr>
        </table>
        <div style="margin-top: 16px; padding: 12px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
          <strong style="color: #334155; display: block; margin-bottom: 4px;">Message Payload:</strong>
          <span style="white-space: pre-wrap;">${escapeHtml(dto.message)}</span>
        </div>
      </div>
    `;

    await this.dispatch(adminEmail, subject, html);
  }

  private async sendClientReceipt(dto: CreateInquiryDto, referenceId: string): Promise<void> {
    const subject = `MarkCare Demonstration Request Receipt (${referenceId})`;

    const html = `
      <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #0f172a; max-width: 600px;">
        <h2 style="color: #0284c7; margin-bottom: 8px;">Inquiry Received</h2>
        <p>Dear ${escapeHtml(dto.name)},</p>
        <p>Thank you for reaching out to MarkCare. We have logged your request for <strong>${escapeHtml(dto.organization)}</strong> under tracking code:</p>
        <div style="margin: 16px 0; padding: 12px; background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 6px; font-family: monospace; font-weight: bold; color: #0369a1; font-size: 15px; text-align: center;">
          ${referenceId}
        </div>
        <p>Our healthcare technology team will contact your facility to schedule the operational walkthrough.</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="font-size: 12px; color: #94a3b8; line-height: 1.4;">
          This is an automated operational transmission. No patient health information is accepted through this channel.
        </p>
      </div>
    `;

    await this.dispatch(dto.email, subject, html);
  }

  private async dispatch(to: string, subject: string, html: string): Promise<void> {
    const provider = this.config.get<string>('MAIL_PROVIDER') || 'smtp';
    const from = this.config.get<string>('MAIL_FROM') || 'MarkCare Systems <notifications@markcare.ke>';

    try {
      if (provider === 'resend') {
        const apiKey = this.config.get<string>('RESEND_API_KEY');
        if (!apiKey) {
          this.logger.warn(`[MAIL] Resend API key missing. Email to [${to}] skipped.`);
          return;
        }

        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ from, to, subject, html }),
        });

        if (!res.ok) {
          const errData = await res.text();
          throw new Error(`Resend API error (${res.status}): ${errData}`);
        }
      } else {
        // Safe runtime dynamic require: avoids TypeScript static module resolution error (TS2307)
        let nodemailer: any = null;
        try {
          const dynamicRequire = eval('require');
          nodemailer = dynamicRequire('nodemailer');
        } catch {
          this.logger.warn(
            `[MAIL] 'nodemailer' is not installed in dependencies. SMTP dispatch to [${to}] skipped safely.`,
          );
          return;
        }

        const transporter = nodemailer.createTransport({
          host: this.config.get<string>('SMTP_HOST'),
          port: Number(this.config.get<number>('SMTP_PORT')) || 587,
          secure: this.config.get<string>('SMTP_SECURE') === 'true',
          auth: {
            user: this.config.get<string>('SMTP_USER'),
            pass: this.config.get<string>('SMTP_PASS'),
          },
        });

        await transporter.sendMail({ from, to, subject, html });
      }

      this.logger.log(`[MAIL] Successfully dispatched notification to [${to}] | Subject: "${subject}"`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      this.logger.error(`[MAIL] Delivery failed to [${to}]: ${msg}`);
      // Do not re-throw: delivery errors should not interrupt client responses
    }
  }
}
