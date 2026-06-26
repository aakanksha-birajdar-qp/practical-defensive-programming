import { Test, TestingModule } from '@nestjs/testing';
import { BackgroundJobController } from './background-job.controller';

describe('BackgroundJobController', () => {
  let controller: BackgroundJobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BackgroundJobController],
    }).compile();

    controller = module.get<BackgroundJobController>(BackgroundJobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
