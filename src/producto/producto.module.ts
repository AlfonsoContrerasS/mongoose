import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { productoSchema } from './schemas/producto.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Producto', schema: productoSchema}])],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
