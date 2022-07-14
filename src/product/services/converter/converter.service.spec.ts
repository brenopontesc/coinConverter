import { Test, TestingModule } from '@nestjs/testing';
import { Trade } from 'src/product/dtos/Trade';
import { ConverterService } from './converter.service';
import { productWithOneVariant, productWithMultipleVariants, BRL_USDTrade } from '../../../../utils/testData'

describe('ConverterService', () => {
  let service: ConverterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConverterService],
    }).compile();

    service = module.get<ConverterService>(ConverterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should convert product',() =>{
    service.convertProduct(productWithOneVariant, BRL_USDTrade)
    expect(productWithOneVariant.variants[0].price).toBe("19.91")
    expect(productWithOneVariant.variants[0].compare_at_price).toBe("29.63")
    expect(productWithOneVariant.variants[0].promotional_price).toBe("39.50")
  })

  it('should convert product with multiples variants',() =>{
    service.convertProduct(productWithMultipleVariants, BRL_USDTrade)
    expect(productWithMultipleVariants.variants[0].price).toBe("19.91")
    expect(productWithMultipleVariants.variants[0].compare_at_price).toBe("29.63")
    expect(productWithMultipleVariants.variants[0].promotional_price).toBe("39.50")

    expect(productWithMultipleVariants.variants[1].price).toBe("30.18")
    expect(productWithMultipleVariants.variants[1].compare_at_price).toBe("39.50")
    expect(productWithMultipleVariants.variants[1].promotional_price).toBe("49.38")

    expect(productWithMultipleVariants.variants[2].price).toBe("88.05")
    expect(productWithMultipleVariants.variants[2].compare_at_price).toBe("29.63")
    expect(productWithMultipleVariants.variants[2].promotional_price).toBe("39.50")
  })
});
