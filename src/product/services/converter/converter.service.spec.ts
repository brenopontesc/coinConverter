import { Test, TestingModule } from '@nestjs/testing';
import { Product } from 'src/product/dtos/Product';
import { Trade } from 'src/product/dtos/Trade';
import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  let service: ConverterService;

  let product: Product = {
    id: 1,
    name : {'pt-br':' YYYYYY' },
    description: {'pt-br':' YYYYYY' },
    handle: {'pt-br':' YYYYYY' },
    attributes: [{'pt-br':' YYYYYY' }],
    published: true,
    free_shipping: true,
    requires_shipping: true,
    canonical_url: 'yyyyyy',
    video_url: 'yyyyyy',
    seo_title: {'pt-br':' YYYYYY' },
    seo_description: {'pt-br':' YYYYYY' },
    brand: {'pt-br':' YYYYYY' },
    created_at: 'YYYYYY',
    updated_at: 'YYYYYY',
    variants: [{
      id: 1,
      image_id:'yyyyyy',
      product_id:1,
      position:1,
      price:'20.16',
      compare_at_price:'30',
      promotional_price:'40.0',
      stock_management:true,
      stock:1,
      weight:'yyyyyy',
      width:'yyyyyy',
      height:'yyyyyy',
      depth:'yyyyyy',
      sku:'yyyyyy',
      values:[{}],
      barcode:'yyyyyy',
      mpn:'yyyyyy',
      age_group:'yyyyyy',
      gender:'yyyyyy',
      created_at:'yyyyyy',
      updated_at:'yyyyyy'
  }],
    tags: ' YYYYYY',
    images: [' YYYYYY'],
    categories: [{
      id: 1,
      name: {'pt-br':' YYYYYY' },
      description: {'pt-br':' YYYYYY' },
      handle: {'pt-br':' YYYYYY' },
      parent: {'pt-br':' YYYYYY' },
      subcategories: [{}],
      seo_title: {'pt-br':' YYYYYY' },
      seo_description: {'pt-br':' YYYYYY' },
      google_shopping_category: 'YYYYY',
      created_at: 'YYYYY',
      updated_at: 'YYYYY',
  }]
  }

  let productWithMultipleVariants: Product = {
    id: 1,
    name : {'pt-br':' YYYYYY' },
    description: {'pt-br':' YYYYYY' },
    handle: {'pt-br':' YYYYYY' },
    attributes: [{'pt-br':' YYYYYY' }],
    published: true,
    free_shipping: true,
    requires_shipping: true,
    canonical_url: 'yyyyyy',
    video_url: 'yyyyyy',
    seo_title: {'pt-br':' YYYYYY' },
    seo_description: {'pt-br':' YYYYYY' },
    brand: {'pt-br':' YYYYYY' },
    created_at: 'YYYYYY',
    updated_at: 'YYYYYY',
    variants: [{
      id: 1,
      image_id:'yyyyyy',
      product_id:1,
      position:1,
      price:'20.16',
      compare_at_price:'30',
      promotional_price:'40.0',
      stock_management:true,
      stock:1,
      weight:'yyyyyy',
      width:'yyyyyy',
      height:'yyyyyy',
      depth:'yyyyyy',
      sku:'yyyyyy',
      values:[{}],
      barcode:'yyyyyy',
      mpn:'yyyyyy',
      age_group:'yyyyyy',
      gender:'yyyyyy',
      created_at:'yyyyyy',
      updated_at:'yyyyyy'
  },
    {
      id: 2,
      image_id:'yyyyyy',
      product_id:1,
      position:1,
      price:'30.56',
      compare_at_price:'40',
      promotional_price:'50.0',
      stock_management:true,
      stock:1,
      weight:'yyyyyy',
      width:'yyyyyy',
      height:'yyyyyy',
      depth:'yyyyyy',
      sku:'yyyyyy',
      values:[{}],
      barcode:'yyyyyy',
      mpn:'yyyyyy',
      age_group:'yyyyyy',
      gender:'yyyyyy',
      created_at:'yyyyyy',
      updated_at:'yyyyyy'
  },
  {
    id: 3,
    image_id:'yyyyyy',
    product_id:1,
    position:1,
    price:'89.16',
    compare_at_price:'30.001',
    promotional_price:'40',
    stock_management:true,
    stock:1,
    weight:'yyyyyy',
    width:'yyyyyy',
    height:'yyyyyy',
    depth:'yyyyyy',
    sku:'yyyyyy',
    values:[{}],
    barcode:'yyyyyy',
    mpn:'yyyyyy',
    age_group:'yyyyyy',
    gender:'yyyyyy',
    created_at:'yyyyyy',
    updated_at:'yyyyyy'
  }],
    tags: ' YYYYYY',
    images: [' YYYYYY'],
    categories: [{
      id: 1,
      name: {'pt-br':' YYYYYY' },
      description: {'pt-br':' YYYYYY' },
      handle: {'pt-br':' YYYYYY' },
      parent: {'pt-br':' YYYYYY' },
      subcategories: [{}],
      seo_title: {'pt-br':' YYYYYY' },
      seo_description: {'pt-br':' YYYYYY' },
      google_shopping_category: 'YYYYY',
      created_at: 'YYYYY',
      updated_at: 'YYYYY',
  }]
  }

  let trade: Trade = {
    'BRL-USD':{
      code: 'value',
      codein:'value',
      name:'value',
      high:'0.98756',
      low:'0.995454',
      varBid:'value',
      pctChange:'value',
      bid :'value',
      ask :'value',
      timestamp:'value',
      create_date:'value'
  }

  }

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
    service.convertProduct(product, trade)
    expect(product.variants[0].price).toBe("19.91")
    expect(product.variants[0].compare_at_price).toBe("29.63")
    expect(product.variants[0].promotional_price).toBe("39.50")
  })

  it('should convert product with multiples variants',() =>{
    service.convertProduct(productWithMultipleVariants, trade)
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
