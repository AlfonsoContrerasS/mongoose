import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentaService } from './venta.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Venta } from './schemas/venta.schema';
import { VentaDto } from './dto/venta.dto';

@Controller('venta')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Post()
  async create(@Body() createVentaDto: CreateVentaDto): Promise<VentaDto> {
    return await this.ventaService.create(createVentaDto);
  }

  @Get()
  async listaVentas(): Promise<Venta[]> {
    const listaVentas = await this.ventaService.findAll();
    return listaVentas;
  }


}
