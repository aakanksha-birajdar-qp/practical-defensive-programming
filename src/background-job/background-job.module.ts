import { Module } from '@nestjs/common';
import { JobController } from './background-job.controller';
import { JobService } from './background-job.service';

@Module({
  controllers: [JobController],
  providers: [JobService],
})
export class BackgroundJobModule {}
