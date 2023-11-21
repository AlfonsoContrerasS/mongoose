import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto } from './schemas/producto.schema';
import { ProductoDto } from './dto/producto.dto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectModel(Producto.name) private readonly productoModel: Model<Producto>
  ) {}

  async create(createProductoDto: CreateProductoDto): Promise<ProductoDto> {
    const producto = new Producto();
    producto.nombre = createProductoDto.nombre;
    producto.categoria = createProductoDto.categoria;
    producto.precio = createProductoDto.precio;
    await this.productoModel.create(producto);
    console.log(producto);
    return producto;
  }

  async findAll(): Promise<ProductoDto[]> {
    const listaProductos = await this.productoModel.find();
    return listaProductos;
  }

  
}
