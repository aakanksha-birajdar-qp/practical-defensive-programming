import { Injectable, Logger } from '@nestjs/common';
import { OtpSendException } from './exceptions/otp-send.exception';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class OtpService {
  private readonly logger = new Logger(OtpService.name);

  // Stores generated OTPs temporarily
  private otpStore = new Map<string, string>();

  private attemptCount = 0;

  async sendOtp(mobileNumber: string) {
    // Mobile number must be provided before processing. (Precondition)
    // Stop execution immediately if invalid input is detected.(Fail Fast)
    if (!mobileNumber) {
      throw new Error('Mobile number required');
    }

    // Generate OTP and send it to the user. (defined Behavior)
    const otp = this.generateOtp();

    // Limit retries to avoid infinite loops.(maximum Retries)
    const MAX_RETRIES = 3;

    let retries = 0;

    while (retries < MAX_RETRIES) {
      try {
        await this.sendSms(mobileNumber, otp);

        this.otpStore.set(mobileNumber, otp);

        this.logger.log(`OTP sent to ${mobileNumber}`); // Log successful OTP send

        return {
          success: true,
          otpSent: true,
          otp,
        };
      } catch (error: unknown) {
        retries++;

        if (error instanceof Error) {
          this.logger.warn(`Retry ${retries} failed: ${error.message}`);
        }

        const delay = Math.pow(2, retries) * 1000; // Exponential back-off: 2^retries seconds

        await this.sleep(delay);

        if (retries === MAX_RETRIES) {
          this.logger.error('Notify support team for manual intervention'); // Log for manual intervention

          throw new OtpSendException('Unable to send OTP'); //throw Exception
        }
      }
    }

    return {
      otpSent: false, //safe fallback response (Neutral value)
    };
  }

  async verifyOtp(mobileNumber: string, otp: string) {
    this.logger.log(`OTP verification started for ${mobileNumber}`);

    const storedOtp = this.otpStore.get(mobileNumber);

    if (storedOtp && typeof storedOtp !== 'string') {
      this.logger.error('Corrupted OTP data detected'); //undefined Behavior

      throw new Error('Unexpected OTP format');
    }

    if (!storedOtp) {
      this.logger.error(`OTP not found for ${mobileNumber}`);

      throw new BadRequestException('OTP not found'); //Throw Exception
    }

    // Invalid OTP returns a safe response
    // instead of crashing the application.
    if (storedOtp !== otp) {
      this.logger.warn(`Invalid OTP entered for ${mobileNumber}`);

      return {
        success: false,
        verified: false,
      };
    }

    this.logger.log(`OTP verified successfully for ${mobileNumber}`); //defined Behavior
    this.otpStore.delete(mobileNumber);

    return {
      success: true,
      message: 'OTP Verified',
    };
  }

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString(); //Defined Behavior: Generate a 6-digit OTP
  }

  private async sendSms(mobileNumber: string, otp: string): Promise<boolean> {
    this.attemptCount++;

    if (this.attemptCount < 3) {
      throw new Error('SMS Provider Timeout'); // throw error and Fail Fast: Stop execution immediately if the SMS provider fails.
    }

    this.logger.log(`OTP ${otp} sent to ${mobileNumber}`);
    return true;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
