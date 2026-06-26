import { IsNotEmpty, Matches } from 'class-validator';

export class SendOtpDto {
  @IsNotEmpty()
  @Matches(/^\d{10}$/)
  mobileNumber: string;
}
