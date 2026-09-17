import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export const INQUIRY_STATUSES = [
  'NEW',
  'IN_REVIEW',
  'CONTACTED',
  'QUALIFIED',
  'CLOSED',
] as const;

export type InquiryStatus = (typeof INQUIRY_STATUSES)[number];

export class UpdateInquiryStatusDto {
  @IsNotEmpty()
  @IsString()
  @IsIn([...INQUIRY_STATUSES], {
    message: `status must be one of: ${INQUIRY_STATUSES.join(', ')}`,
  })
  status: InquiryStatus;
}
