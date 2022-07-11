import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TiendanubeApiService } from './services/tiendanube-api/tiendanube-api.service';

@Module({
    imports:[
        HttpModule
    ],
    providers: [TiendanubeApiService]
})
export class TiendanubeModule {}
