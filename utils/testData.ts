import { Product } from "../src/product/dtos/Product"
import { Trade } from "../src/product/dtos/Trade"

export const currencies = {
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

export let productWithOneVariant: Product = {
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

export let productWithMultipleVariants: Product = {
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

export const BRL_USDTrade : Trade = {
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