import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtpModule } from './otp/otp.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { BackgroundJobModule } from './background-job/background-job.module';
import { ReportGenerationModule } from './report-generation/report-generation.module';

@Module({
  imports: [
    OtpModule,
    AuthenticationModule,
    BackgroundJobModule,
    ReportGenerationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
