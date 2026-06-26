import { HttpException, HttpStatus } from '@nestjs/common';

export class OtpSendException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
