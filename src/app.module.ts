import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProductModule } from './product/product.module';
import { TiendanubeModule } from './tiendanube/tiendanube.module';

@Module({
  imports: [
    AuthenticationModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'coinConverter',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    ProductModule,
    TiendanubeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
