import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../../authentication/entities/user.entity';
import { AuthenticationService } from '../../../authentication/services/authentication/authentication.service';
import { TiendanubeApiService } from '../../../tiendanube/services/tiendanube-api/tiendanube-api.service';
import { AwesomeApiService } from '../awesome-api/awesome-api.service';
import { ConverterService } from '../converter/converter.service';
import { ProductService } from './product.service';
import { productWithMultipleVariants, productWithOneVariant, BRL_USDTrade} from '../../../../utils/testData'
import { Product } from '../../dtos/Product';

describe('ProductService', () => {
  let service: ProductService;
  let converterService : ConverterService;
  let authenticationService : AuthenticationService;
  let tiendanubeApiService : TiendanubeApiService;
  let awesomeApiService : AwesomeApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        ConverterService,
        AuthenticationService,
        TiendanubeApiService,
        AwesomeApiService,
        { 
          provide: getRepositoryToken(User),
          useValue: {}
        },
        {
          provide: HttpService,
          useValue: jest.fn()
        }
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    converterService = module.get<ConverterService>(ConverterService);
    authenticationService = module.get<AuthenticationService>(AuthenticationService);
    tiendanubeApiService = module.get<TiendanubeApiService>(TiendanubeApiService);
    awesomeApiService = module.get<AwesomeApiService>(AwesomeApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a product with no conversion ',async ()=>{
    let user: User = {
      access_token: '1211',
      token_type: '',
      scope: '',
      user_id: 123
    }
    jest.spyOn(authenticationService , 'findUserByUserId').mockImplementation(() => Promise.resolve([user]))
    jest.spyOn(tiendanubeApiService , 'getProductById').mockImplementation(() => Promise.resolve(productWithOneVariant))

    expect(await service.getProductInSelectedCurrencyById(111, 1, undefined)).toStrictEqual(productWithOneVariant)
  })

  it('should return a single product with converted prices',async ()=>{
    let user: User = {
      access_token: '1211',
      token_type: '',
      scope: '',
      user_id: 123
    }
    jest.spyOn(authenticationService , 'findUserByUserId').mockImplementation(() => Promise.resolve([user]))
    jest.spyOn(tiendanubeApiService , 'getProductById').mockImplementation(() => Promise.resolve(productWithOneVariant))
    jest.spyOn(awesomeApiService , 'getTradeValueByCurrency').mockImplementation(() => Promise.resolve(BRL_USDTrade))

    let actualProduct : Product =  await service.getProductInSelectedCurrencyById(111, 1, 'USD');

    expect(actualProduct.variants[0].compare_at_price).toStrictEqual('29.63')
    expect(actualProduct.variants[0].promotional_price).toStrictEqual('39.50')
    expect(actualProduct.variants[0].price).toStrictEqual('19.91')
  })

  it('should return a should return a set of products with converted prices',async ()=>{
    let user: User = {
      access_token: '1211',
      token_type: '',
      scope: '',
      user_id: 123
    }
    jest.spyOn(authenticationService , 'findUserByUserId').mockImplementation(() => Promise.resolve([user]))
    jest.spyOn(tiendanubeApiService , 'getAllProducts').mockImplementation(() => Promise.resolve([productWithOneVariant, productWithMultipleVariants]))
    jest.spyOn(awesomeApiService , 'getTradeValueByCurrency').mockImplementation(() => Promise.resolve(BRL_USDTrade))

    let actualProducts : Product[] =  await service.getAllProductsInSelectedCurrency(111, 'USD');

    expect(actualProducts[0].variants[0].compare_at_price).toStrictEqual('29.26')
    expect(actualProducts[0].variants[0].promotional_price).toStrictEqual('39.01')
    expect(actualProducts[0].variants[0].price).toStrictEqual('19.66')

    expect(actualProducts[1].variants[0].price).toStrictEqual('19.91')
    expect(actualProducts[1].variants[0].compare_at_price).toStrictEqual('29.63')
    expect(actualProducts[1].variants[0].promotional_price).toStrictEqual('39.50')
  
    expect(actualProducts[1].variants[1].price).toStrictEqual('30.18')
    expect(actualProducts[1].variants[1].compare_at_price).toStrictEqual('39.50')
    expect(actualProducts[1].variants[1].promotional_price).toStrictEqual('49.38')
  
    expect(actualProducts[1].variants[2].price).toStrictEqual('88.05')
    expect(actualProducts[1].variants[2].compare_at_price).toStrictEqual('29.63')
    expect(actualProducts[1].variants[2].promotional_price).toStrictEqual('39.50')
    
  })

  it('should return a should return a set of products with no converted prices',async ()=>{
    let user: User = {
      access_token: '1211',
      token_type: '',
      scope: '',
      user_id: 123
    }
    jest.spyOn(authenticationService , 'findUserByUserId').mockImplementation(() => Promise.resolve([user]))
    jest.spyOn(tiendanubeApiService , 'getAllProducts').mockImplementation(() => Promise.resolve([productWithOneVariant, productWithMultipleVariants]))
    
    let actualProducts : Product[] =  await service.getAllProductsInSelectedCurrency(111, undefined);
    expect(JSON.stringify(actualProducts[0])).toStrictEqual(JSON.stringify(productWithOneVariant));
    expect(JSON.stringify(actualProducts[1])).toStrictEqual(JSON.stringify(productWithMultipleVariants));
  })
});
