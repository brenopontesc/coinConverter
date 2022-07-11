import { Injectable } from '@nestjs/common';
import { Product } from 'src/product/dtos/Product';
import { Trade } from 'src/product/dtos/Trade';
import { AwesomeApiService } from '../awesome-api/awesome-api.service';

@Injectable()
export class ConverterService {
    constructor(private awesomeApiService: AwesomeApiService){}

    convertProduct(product: Product, trade: Trade): Product{
        let tradeValue : string = Object.values(trade)[0].high
        product.variants.forEach(variant =>{
            variant.price = String((Number(variant.price)* Number(tradeValue)).toFixed(2))
            variant.compare_at_price = String((Number(variant.compare_at_price)* Number(tradeValue)).toFixed(2))
            variant.promotional_price = String((Number(variant.promotional_price)* Number(tradeValue)).toFixed(2))
        })
        return product 
    }
}
