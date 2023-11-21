import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { VentaModule } from './venta/venta.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo:clave123@localhost:27017/tienda'), ProductoModule, VentaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
