import { IsNotEmpty, Matches } from 'class-validator';

export class VerifyOtpDto {
  @IsNotEmpty()
  mobileNumber: string;

  @IsNotEmpty()
  @Matches(/^\d{6}$/)
  otp: string;
}
