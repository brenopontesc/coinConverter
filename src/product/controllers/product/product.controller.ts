import { Controller, Get, HttpException, HttpStatus, Param, Query, Headers, NotFoundException } from '@nestjs/common';
import { AwesomeApiService } from '../../services/awesome-api/awesome-api.service';
import { ProductService } from '../../services/product/product.service';
import { ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger'
import { Product } from '../../dtos/Product';

interface Headers{
    user_id: string
}
@Controller('products')
export class ProductController {
    constructor(
        private aewsomeApiService : AwesomeApiService, 
        private productService : ProductService
    ){}

    @Get('/currencies')
    async getAvailableCurrencies(){
        return await this.aewsomeApiService.getAvailableCurrencies();
    }

    @Get()
    @ApiOkResponse({
        type: [Product]
    })
    async getAllProductsInSelectedCurrency(@Query('currency') currency: string, @Headers('user_id') userId : number){
        return this.productService.getAllProductsInSelectedCurrency(userId, currency )
    }

    @Get('/:productId')
    @ApiOkResponse({
        type: Product
    })
    @ApiNotFoundResponse({
        "status": 404,
        "description": "Product not found!"
    })
    async getProductInSelectedCurrencyById(@Query('currency') currency: string, @Headers('user_id') userId : number, @Param('productId') productId: number){        
        return this.productService.getProductInSelectedCurrencyById(userId, productId, currency)
    }
}
