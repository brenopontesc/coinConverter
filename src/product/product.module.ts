import { Module } from '@nestjs/common';
import { AwesomeApiService } from './services/awesome-api/awesome-api.service';
import { ProductController } from './controllers/product/product.controller';
import { HttpModule } from '@nestjs/axios';
import { TiendanubeApiService } from 'src/tiendanube/services/tiendanube-api/tiendanube-api.service';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { AuthenticationService } from 'src/authentication/services/authentication/authentication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/authentication/entities/user.entity';
import { ConverterService } from './services/converter/converter.service';

@Module({
  imports:[ 
    HttpModule,
    TypeOrmModule.forFeature([User])
],
  providers: [AwesomeApiService, TiendanubeApiService, AuthenticationService, ConverterService],
  controllers: [ProductController]
})
export class ProductModule {}
