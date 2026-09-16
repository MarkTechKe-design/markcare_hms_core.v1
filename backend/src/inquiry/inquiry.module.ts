import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InquiryController } from './inquiry.controller';
import { InquiryService } from './inquiry.service';
import { InquiryMailerService } from './inquiry-mailer.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [ConfigModule, PrismaModule],
  controllers: [InquiryController],
  providers: [InquiryService, InquiryMailerService],
  exports: [InquiryService, InquiryMailerService],
})
export class InquiryModule {}
