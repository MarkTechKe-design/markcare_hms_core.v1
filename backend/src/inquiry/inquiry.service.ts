import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { InquiryMailerService } from './inquiry-mailer.service';
import { PrismaService } from '../prisma/prisma.service';

export interface InquiryReceipt {
  success: boolean;
  referenceId: string;
  receivedAt: string;
  message: string;
}

@Injectable()
export class InquiryService {
  private readonly logger = new Logger(InquiryService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mailerService: InquiryMailerService,
  ) {}

  async processInquiry(dto: CreateInquiryDto): Promise<InquiryReceipt> {
    const referenceId = `MC-INQ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // 1. Mandatory database persistence BEFORE treating inquiry as received
    let persisted;
    try {
      persisted = await this.prisma.inquiry.create({
        data: {
          referenceId,
          type: dto.type,
          name: dto.name.trim(),
          email: dto.email.trim().toLowerCase(),
          phone: dto.phone.trim(),
          organization: dto.organization.trim(),
          facilityType: dto.facilityType?.trim() || null,
          message: dto.message.trim(),
          status: 'NEW',
        },
      });
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      this.logger.error(`Failed to persist inquiry ${referenceId} in database: ${errorMsg}`);
      throw new InternalServerErrorException('Failed to securely record inquiry in the system database.');
    }

    const receivedAt = persisted.createdAt.toISOString();

    // 2. Structured operational audit trail
    this.logger.log(
      JSON.stringify({
        event: 'COMMERCIAL_INQUIRY_RECEIVED',
        inquiryId: persisted.id,
        referenceId: persisted.referenceId,
        type: persisted.type,
        facility: persisted.organization,
        facilityType: persisted.facilityType || 'UNSPECIFIED',
        contactName: persisted.name,
        emailDomain: persisted.email.split('@')[1],
        receivedAt,
      }),
    );

    // 3. Non-blocking asynchronous dispatch - email failure must NOT fail persistence
    this.mailerService.sendInquiryNotifications(dto, referenceId).catch((err) => {
      this.logger.error(`Background dispatch failure for ${referenceId}: ${err.message}`);
    });

    // 4. Return sanitized confirmed receipt to client
    return {
      success: true,
      referenceId: persisted.referenceId,
      receivedAt,
      message: 'Your inquiry has been received. A MarkCare systems representative will contact your facility.',
    };
  }
}
