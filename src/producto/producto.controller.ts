import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ProductoDto } from './dto/producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  async registrarProducto(@Body() createProductoDto: CreateProductoDto): Promise<ProductoDto> {
    const producto = await this.productoService.create(createProductoDto);
    return producto;
  }

  @Get()
  async listaProductos(): Promise<ProductoDto[]> {
    return await this.productoService.findAll();
  }

}
