import { Module } from '@nestjs/common';
import { ReportGenerationController } from './report-generation.controller';
import { ReportGenerationService } from './report-generation.service';

@Module({
  controllers: [ReportGenerationController],
  providers: [ReportGenerationService]
})
export class ReportGenerationModule {}
