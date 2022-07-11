import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthenticationController } from './controllers/authentication/authentication.controller';
import { TiendanubeApiService } from '../tiendanube/services/tiendanube-api/tiendanube-api.service';
import { HttpModule } from '@nestjs/axios';


@Module({
    imports:[
        HttpModule,
        TypeOrmModule.forFeature([User])
    ],
    providers: [AuthenticationService, TiendanubeApiService],
    controllers: [AuthenticationController]
})
export class AuthenticationModule {}
