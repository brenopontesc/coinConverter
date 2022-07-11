import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { User } from 'src/authentication/entities/user.entity';
import { Product } from 'src/product/dtos/Product';
interface AuthenticationRequestBody {
    client_id: string,
    client_secret: string, 
    grant_type: string, 
    code: string 
}

@Injectable()
export class TiendanubeApiService {
    constructor(private readonly httpService: HttpService) {}

    tiendanubeApiPrefix : string = "https://api.nuvemshop.com.br/v1/"  

    async authenticateUserInTiendanubeApi( code: string ):Promise<User>{
        let url = 'https://www.tiendanube.com/apps/authorize/token'
        let body:AuthenticationRequestBody = {
            client_id : "5157",
            client_secret:"q3dwrOuCGofhzCWksyudsvYQ8QMGX7Ez2Je6cSrZU7zL3zMI", 
            grant_type: "authorization_code", 
            code: code
        }
        return await lastValueFrom( 
            this.httpService.post(url, body).pipe(
                map(response => {
                    return response.data
                })
            )
        )
    };

    async getAllProducts(userId : number, access_token: string): Promise<Product[]>{
        const headersRequest = {
            'Content-Type': 'application/json',
            'Authentication': `bearer ${access_token}`,
        };

        return await lastValueFrom( 
            this.httpService.get(this.tiendanubeApiPrefix + userId+'/products', {headers: headersRequest }).pipe(
                map(response => {
                    return response.data
                })
            )
        )
    }

    async getProductById(userId : number, access_token: string, productId: number): Promise<Product>{
        const headersRequest = {
            'Content-Type': 'application/json',
            'Authentication': `bearer ${access_token}`,
        };

        return await lastValueFrom( 
            this.httpService.get(this.tiendanubeApiPrefix + userId+'/products/' + productId , {headers: headersRequest }).pipe(
                map(response => {
                    return response.data
                })
            )
        )
    }
}
