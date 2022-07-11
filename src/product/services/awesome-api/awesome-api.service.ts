import {  HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import { Trade } from 'src/product/dtos/Trade';

@Injectable()
export class AwesomeApiService {
    constructor(private readonly httpService: HttpService) {}

    urlPrefix : string = "http://economia.awesomeapi.com.br";

    async getAvailableCurrencies(){
        let currencies =  await lastValueFrom( 
            this.httpService.get(this.urlPrefix + '/json/available').pipe(
                map(response => {
                    return response.data
                })
            )
        )

        return this.getAvailableConversionForBRL( currencies )
    }

    async getTradeValueByCurrency(currency: string) : Promise<Trade>{
        return await lastValueFrom( 
            this.httpService.get(this.urlPrefix + '/last/BRL-'+ currency.toUpperCase()).pipe(
                map(response => {
                    return response.data
                }),
                catchError(error =>{
                    throw new HttpException(error.response.data, error.response.status);
                })
            )
        )
    }

    getAvailableConversionForBRL(currencies: Object) : Object{
        return Object.fromEntries(Object.entries(currencies).filter(([key]) => key.includes('BRL-')));
    }
}
