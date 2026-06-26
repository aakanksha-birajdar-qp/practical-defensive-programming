import { Test, TestingModule } from '@nestjs/testing';
import { BackgroundJobService } from './background-job.service';

describe('BackgroundJobService', () => {
  let service: BackgroundJobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BackgroundJobService],
    }).compile();

    service = module.get<BackgroundJobService>(BackgroundJobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
