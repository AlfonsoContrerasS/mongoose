import { Module } from '@nestjs/common';
import { VentaService } from './venta.service';
import { VentaController } from './venta.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ventaSchema } from './schemas/venta.schema';
import { productoSchema } from 'src/producto/schemas/producto.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Venta', schema: ventaSchema}, {name: 'Producto', schema: productoSchema}])], 
  controllers: [VentaController],
  providers: [VentaService],
})
export class VentaModule {}
