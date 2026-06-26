import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse();

    let status = 500;
    let message = 'Internal Server Global Error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();

      message = exception.message;
    }

    response.status(status).json({
      success: false,
      message,
    });
  }
}
