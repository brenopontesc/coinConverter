import { Controller, Get, Post, Query } from '@nestjs/common';
import { User } from 'src/authentication/entities/user.entity';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { TiendanubeApiService } from '../../../tiendanube/services/tiendanube-api/tiendanube-api.service';

@Controller('authentication')
export class AuthenticationController {
    constructor(private authenticationService: AuthenticationService, private tiendaNubeApiService: TiendanubeApiService){}

    @Get('/register')
    async authenticate(@Query('code')code:string):Promise<User>{
        let user : User = await this.tiendaNubeApiService.authenticateUserInTiendanubeApi(code)    
        let createdUser = await this.authenticationService.createUser(user)
        return createdUser
    }
}
