import { Test, TestingModule } from '@nestjs/testing';
import { AwesomeApiService } from './awesome-api.service';

describe('AwesomeApiService', () => {
  let service: AwesomeApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwesomeApiService],
    }).compile();

    service = module.get<AwesomeApiService>(AwesomeApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
