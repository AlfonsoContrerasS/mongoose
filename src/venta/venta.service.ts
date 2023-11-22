import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venta } from './schemas/venta.schema';
import { Producto } from 'src/producto/schemas/producto.schema';
import { VentaDto } from './dto/venta.dto';
import { mapperVenta } from './mapper/venta.mapper';

@Injectable()
export class VentaService {

  constructor(
    @InjectModel(Venta.name) private readonly ventaModel: Model<Venta>,
    @InjectModel(Producto.name) private readonly productoModel: Model<Producto>
  ) {}
  
  async create(createVentaDto: CreateVentaDto): Promise<VentaDto> {
    try {
      const productoExist = await this.productoModel.exists({_id: createVentaDto.idProducto});
      console.log(productoExist);
    } catch (error) {
      throw new Error('No se encontro el producto');
    }
    const venta = new Venta();
    venta.cantidad = createVentaDto.cantidad;
    const fecha = new Date();
    venta.fecha = fecha;
    const productoEncontrado = await this.productoModel.findOne({_id: createVentaDto.idProducto})
    
    venta.producto = productoEncontrado;
    venta.total = productoEncontrado.precio * createVentaDto.cantidad;
    await this.ventaModel.create(venta);
    const resultado = mapperVenta.toDto(venta);
    return resultado;
     
  }

  async findAll(): Promise<Venta[]> {
    const listaVentas = await this.ventaModel.find();
    return listaVentas;
  }

  reporteVentas(): string {
    const ventas = this.ventaModel.find();
    // const reporte = this.ventaModel.aggregate([
    //   {
    //     $s: {
    //       _id: null,
    //       total: {$sum: "$total"},
    //       cantidad: {$sum: "$cantidad"}
    //     }
    //   }
    // ])
    return 'Reporte de ventas';
  }
}
