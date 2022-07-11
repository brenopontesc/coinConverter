import { Test, TestingModule } from '@nestjs/testing';
import { TiendanubeApiService } from './tiendanube-api.service';

describe('TiendanubeApiService', () => {
  let service: TiendanubeApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiendanubeApiService],
    }).compile();

    service = module.get<TiendanubeApiService>(TiendanubeApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
