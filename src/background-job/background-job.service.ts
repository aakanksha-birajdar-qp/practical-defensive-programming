import { Injectable, Logger } from '@nestjs/common';

import { JobProcessingException } from '../common/exceptions/job-processing.exception';

@Injectable()
export class JobService {
  private readonly logger = new Logger(JobService.name);

  private attemptCount = 0;

  async processJob(reportName: string) {
    // Preconditions + Fail Fast

    if (!reportName) {
      throw new Error('Report name required');
    }

    const MAX_RETRIES = 3;

    let retries = 0;

    while (retries < MAX_RETRIES) {
      try {
        await this.generateReport(reportName);

        this.logger.log(`Report ${reportName} generated`);

        return {
          success: true,
          reportName,
        };
      } catch (error: unknown) {
        retries++;

        if (error instanceof Error) {
          this.logger.warn(`Retry ${retries} failed: ${error.message}`);
        }

        const delay = Math.pow(2, retries) * 1000;

        await this.sleep(delay);

        if (retries === MAX_RETRIES) {
          this.logger.error('Notify Admin - Job Failed');

          throw new JobProcessingException('Report generation failed');
        }
      }
    }

    return {
      success: false,
    };
  }

  private async generateReport(reportName: string) {
    this.attemptCount++;

    // Simulated transient failure

    if (this.attemptCount < 3) {
      throw new Error('PDF Service Timeout');
    }

    this.logger.log(`Generated report: ${reportName}`);

    return true;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
