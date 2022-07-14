import { Module } from '@nestjs/common';
import { AwesomeApiService } from './services/awesome-api/awesome-api.service';
import { ProductController } from './controllers/product/product.controller';
import { HttpModule } from '@nestjs/axios';
import { TiendanubeApiService } from 'src/tiendanube/services/tiendanube-api/tiendanube-api.service';
import { AuthenticationService } from 'src/authentication/services/authentication/authentication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/authentication/entities/user.entity';
import { ConverterService } from './services/converter/converter.service';
import { ProductService } from './services/product/product.service';

@Module({
  imports:[ 
    HttpModule,
    TypeOrmModule.forFeature([User])
],
  providers: [AwesomeApiService, TiendanubeApiService, AuthenticationService, ConverterService, ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
