import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venta } from './schemas/venta.schema';
import { Producto } from 'src/producto/schemas/producto.schema';

@Injectable()
export class VentaService {

  constructor(
    @InjectModel(Venta.name) private readonly ventaModel: Model<Venta>,
    @InjectModel(Producto.name) private readonly productoModel: Model<Producto>
  ) {}
  
  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
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
    const listaProductos = [];
    listaProductos.push(productoEncontrado);
    console.log(listaProductos[0]);
    venta.producto = listaProductos[0];
    venta.total = listaProductos[0].precio * createVentaDto.cantidad;
    await this.ventaModel.create(venta);
    return venta;
     
  }

  async findAll(): Promise<Venta[]> {
    const listaVentas = await this.ventaModel.find();
    return listaVentas;
  }

  findOne(id: number) {
    return `This action returns a #${id} venta`;
  }

  update(id: number, updateVentaDto: UpdateVentaDto) {
    return `This action updates a #${id} venta`;
  }

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}
