import { Controller, Get, HttpException, HttpStatus, Param, Query, Headers, NotFoundException } from '@nestjs/common';
import { User } from 'src/authentication/entities/user.entity';
import { AuthenticationService } from 'src/authentication/services/authentication/authentication.service';
import { Product } from 'src/product/dtos/Product';
import { AwesomeApiService } from 'src/product/services/awesome-api/awesome-api.service';
import { ConverterService } from 'src/product/services/converter/converter.service';
import { TiendanubeApiService } from 'src/tiendanube/services/tiendanube-api/tiendanube-api.service';
interface Headers{
    user_id: string
}
@Controller('products')
export class ProductController {
    constructor(
        private aewsomeApiService :AwesomeApiService, 
        private tiendanubeApiService: TiendanubeApiService, 
        private authenticationService: AuthenticationService,
        private converterService: ConverterService
    ){}
 
    @Get('/currencies')
    async getAvailableCurrencies(){
        return await this.aewsomeApiService.getAvailableCurrencies();
    }

    @Get()
    async getAllProductsInSelectedCurrency(@Query('currency') currency: string, @Headers('user_id') userId : number){
        let user = await this.authenticationService.findUserByUserId(userId)
        let products = await this.tiendanubeApiService.getAllProducts(userId, user[0].access_token)
        
        if(currency){
            let trade = await this.aewsomeApiService.getTradeValueByCurrency(currency)
            return products.map(product => this.converterService.convertProduct(product, trade))
        }
        return products
    }

    @Get('/:productId')
    async getProductInSelectedCurrencyById(@Query('currency') currency: string, @Headers('user_id') userId : number, @Param('productId') productId: number){ 
        let user = await this.authenticationService.findUserByUserId(userId)
        let product: Product = await this.tiendanubeApiService.getProductById(userId, user[0].access_token, productId)
        
        if(!product){
            throw NotFoundException
        }

        if(currency){
            let trade = await this.aewsomeApiService.getTradeValueByCurrency(currency)
            this.converterService.convertProduct(product, trade)    
        }

        return product
        
    }
}
