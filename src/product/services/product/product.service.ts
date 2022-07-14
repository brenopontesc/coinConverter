import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthenticationService } from '../../../authentication/services/authentication/authentication.service';
import { Product } from '../../dtos/Product';
import { TiendanubeApiService } from '../../../tiendanube/services/tiendanube-api/tiendanube-api.service';
import { AwesomeApiService } from '../awesome-api/awesome-api.service';
import { ConverterService } from '../converter/converter.service';

@Injectable()
export class ProductService {
    constructor(
        private awesomeApiService :AwesomeApiService, 
        private tiendanubeApiService: TiendanubeApiService, 
        private authenticationService: AuthenticationService,
        private converterService: ConverterService
    ){}

    async getAllProductsInSelectedCurrency(userId: number , currency? :string): Promise<Product[]>{
        let user = await this.authenticationService.findUserByUserId(userId)
        let products = await this.tiendanubeApiService.getAllProducts(userId, user[0].access_token)
        
        if(currency){
            let trade = await this.awesomeApiService.getTradeValueByCurrency(currency)
            return products.map(product => this.converterService.convertProduct(product, trade))
        }
        return products
    }

    async getProductInSelectedCurrencyById(userId: number, productId: number, currency: string): Promise<Product>{
        let user = await this.authenticationService.findUserByUserId(userId)
        let product: Product = await this.tiendanubeApiService.getProductById(userId, user[0].access_token, productId)

        if(!product){
            throw NotFoundException
        }

        if(currency){
            let trade = await this.awesomeApiService.getTradeValueByCurrency(currency)
            this.converterService.convertProduct(product, trade)    
        }
        return product

    }

}
