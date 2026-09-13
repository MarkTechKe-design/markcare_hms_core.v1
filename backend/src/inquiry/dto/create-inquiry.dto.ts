import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateInquiryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(150)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  organization: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['DEMO_REQUEST', 'GENERAL_CONTACT', 'TECHNICAL_OVERVIEW'])
  type: 'DEMO_REQUEST' | 'GENERAL_CONTACT' | 'TECHNICAL_OVERVIEW';

  @IsString()
  @IsOptional()
  @MaxLength(100)
  facilityType?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  message: string;
}
