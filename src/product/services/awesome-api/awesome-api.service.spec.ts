import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AwesomeApiService } from './awesome-api.service';

describe('AwesomeApiService', () => {
  let service: AwesomeApiService;

  let expected = JSON.stringify({
    "BRL-USD": "Real Brasileiro/Dólar Americano",
    "BRL-EUR": "Real Brasileiro/Euro",
    "BRL-ARS": "Real Brasileiro/Peso Argentino",
    "BRL-AUD": "Real Brasileiro/Dólar Australiano",
    "BRL-CAD": "Real Brasileiro/Dólar Canadense",
    "BRL-CHF": "Real Brasileiro/Franco Suíço",
    "BRL-CLP": "Real Brasileiro/Peso Chileno",
    "BRL-DKK": "Real Brasileiro/Coroa Dinamarquesa",
    "BRL-HKD": "Real Brasileiro/Dólar de Hong Kong",
    "BRL-JPY": "Real Brasileiro/Iene Japonês",
    "BRL-MXN": "Real Brasileiro/Peso Mexicano",
    "BRL-SGD": "Real Brasileiro/Dólar de Cingapura",
    "BRL-AED": "Real Brasileiro/Dirham dos Emirados",
    "BRL-BBD": "Real Brasileiro/Dólar de Barbados"
  })

  let currencies = {
    "USD-BRL":"Dólar Americano/Real Brasileiro",
    "USD-BRLT":"Dólar Americano/Real Brasileiro Turismo",
    "CAD-BRL":"Dólar Canadense/Real Brasileiro",
    "EUR-BRL":"Euro/Real Brasileiro",
    "GBP-BRL":"Libra Esterlina/Real Brasileiro",
    "ARS-BRL":"Peso Argentino/Real Brasileiro",
    "BTC-BRL":"Bitcoin/Real Brasileiro",
    "LTC-BRL":"Litecoin/Real Brasileiro",
    "JPY-BRL":"Iene Japonês/Real Brasileiro",
    "CHF-BRL":"Franco Suíço/Real Brasileiro",
    "AUD-BRL":"Dólar Australiano/Real Brasileiro",
    "CNY-BRL":"Yuan Chinês/Real Brasileiro",
    "ILS-BRL":"Novo Shekel Israelense/Real Brasileiro",
    "ETH-BRL":"Ethereum/Real Brasileiro",
    "XRP-BRL":"XRP/Real Brasileiro",
    "EUR-USD":"Euro/Dólar Americano",
    "CAD-USD":"Dólar Canadense/Dólar Americano",
    "GBP-USD":"Libra Esterlina/Dólar Americano",
    "ARS-USD":"Peso Argentino/Dólar Americano",
    "JPY-USD":"Iene Japonês/Dólar Americano",
    "BRL-USD": "Real Brasileiro/Dólar Americano",
    "BRL-EUR": "Real Brasileiro/Euro",
    "BRL-ARS": "Real Brasileiro/Peso Argentino",
    "BRL-AUD": "Real Brasileiro/Dólar Australiano",
    "BRL-CAD": "Real Brasileiro/Dólar Canadense",
    "BRL-CHF": "Real Brasileiro/Franco Suíço",
    "BRL-CLP": "Real Brasileiro/Peso Chileno",
    "BRL-DKK": "Real Brasileiro/Coroa Dinamarquesa",
    "BRL-HKD": "Real Brasileiro/Dólar de Hong Kong",
    "BRL-JPY": "Real Brasileiro/Iene Japonês",
    "BRL-MXN": "Real Brasileiro/Peso Mexicano",
    "BRL-SGD": "Real Brasileiro/Dólar de Cingapura",
    "BRL-AED": "Real Brasileiro/Dirham dos Emirados",
    "BRL-BBD": "Real Brasileiro/Dólar de Barbados"
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AwesomeApiService,
        {
          provide: HttpService,
          useValue: jest.fn()
        }
      ],
    }).compile();

    service = module.get<AwesomeApiService>(AwesomeApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get available conversion for BRL',()=>{
    expect(JSON.stringify(service.getAvailableConversionForBRL(currencies))).toBe(expected)
  });
});
