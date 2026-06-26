import { Body, Controller, Post } from '@nestjs/common';
import { JobService } from './background-job.service';
import { CreateJobDto } from './dto/create-job.dto';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  createJob(@Body() dto: CreateJobDto) {
    return this.jobService.processJob(dto.reportName);
  }
}
