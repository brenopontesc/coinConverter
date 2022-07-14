import { Test, TestingModule } from '@nestjs/testing';
import { AwesomeApiService } from '../../services/awesome-api/awesome-api.service';
import { ProductService } from '../../services/product/product.service';
import { ProductController } from './product.controller';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers:[ 
        {
          provide: ProductService,
          useValue: jest.fn()
        },
        {
          provide: AwesomeApiService,
          useValue: jest.fn()
        }
    ]
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
