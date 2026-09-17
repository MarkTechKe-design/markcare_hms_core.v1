import {
  Injectable,
  Logger,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { QueryInquiryDto } from './dto/query-inquiry.dto';
import { UpdateInquiryStatusDto } from './dto/update-inquiry-status.dto';
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

    this.mailerService.sendInquiryNotifications(dto, referenceId).catch((err) => {
      this.logger.error(`Background dispatch failure for ${referenceId}: ${err.message}`);
    });

    return {
      success: true,
      referenceId: persisted.referenceId,
      receivedAt,
      message: 'Your inquiry has been received. A MarkCare systems representative will contact your facility.',
    };
  }

  async findAll(query: QueryInquiryDto) {
    const page = query.page && query.page > 0 ? Number(query.page) : 1;
    const limit = query.limit && query.limit > 0 ? Math.min(Number(query.limit), 100) : 20;
    const skip = (page - 1) * limit;

    const where: any = {};

    if (query.status) {
      where.status = query.status.trim().toUpperCase();
    }

    if (query.type) {
      where.type = query.type.trim();
    }

    if (query.search) {
      const s = query.search.trim();
      where.OR = [
        { referenceId: { contains: s } },
        { name: { contains: s } },
        { email: { contains: s } },
        { phone: { contains: s } },
        { organization: { contains: s } },
      ];
    }

    const [total, data] = await Promise.all([
      this.prisma.inquiry.count({ where }),
      this.prisma.inquiry.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit) || 1,
      },
    };
  }

  async findOne(id: number) {
    const inquiry = await this.prisma.inquiry.findUnique({
      where: { id },
    });

    if (!inquiry) {
      throw new NotFoundException(`Inquiry record #${id} was not found.`);
    }

    return inquiry;
  }

  async updateStatus(id: number, dto: UpdateInquiryStatusDto) {
    await this.findOne(id);

    const updated = await this.prisma.inquiry.update({
      where: { id },
      data: { status: dto.status },
    });

    this.logger.log(
      JSON.stringify({
        event: 'COMMERCIAL_INQUIRY_STATUS_UPDATED',
        inquiryId: updated.id,
        referenceId: updated.referenceId,
        newStatus: updated.status,
        updatedAt: updated.updatedAt.toISOString(),
      }),
    );

    return updated;
  }
}
