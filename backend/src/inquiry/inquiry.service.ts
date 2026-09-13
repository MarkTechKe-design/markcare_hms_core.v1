import { Injectable, Logger } from '@nestjs/common';
import { CreateInquiryDto } from './dto/create-inquiry.dto';

export interface InquiryReceipt {
  success: boolean;
  referenceId: string;
  receivedAt: string;
  message: string;
}

@Injectable()
export class InquiryService {
  private readonly logger = new Logger(InquiryService.name);

  async processInquiry(dto: CreateInquiryDto): Promise<InquiryReceipt> {
    const referenceId = `MC-INQ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const receivedAt = new Date().toISOString();

    // Log structured audit trail without exposing patient data
    this.logger.log(
      JSON.stringify({
        event: 'COMMERCIAL_INQUIRY_RECEIVED',
        referenceId,
        type: dto.type,
        facility: dto.organization,
        facilityType: dto.facilityType || 'UNSPECIFIED',
        contactName: dto.name,
        emailDomain: dto.email.split('@')[1],
        receivedAt,
      }),
    );

    return {
      success: true,
      referenceId,
      receivedAt,
      message: 'Your inquiry has been received. A MarkCare systems representative will contact your facility.',
    };
  }
}
