import { VentaDto } from "../dto/venta.dto";
import { Venta } from "../schemas/venta.schema";

export class mapperVenta {
 static toDto(venta: Venta): VentaDto {
    const mappedVenta = new VentaDto();

    mappedVenta.nombreProducto = venta.producto.nombre;
    mappedVenta.fecha = venta.fecha;
    mappedVenta.total = venta.total;
    mappedVenta.cantidad = venta.cantidad;

    return mappedVenta;

}

static toDtoList(ventas: Venta[]): VentaDto[] {
    const mappedVentas = ventas.map(ventas => mapperVenta.toDto(ventas));
    return mappedVentas;
}

static toEntity(ventaDto: VentaDto): Venta {
    const mappedVenta = new Venta();

    
    mappedVenta.fecha = ventaDto.fecha;
    mappedVenta.total = ventaDto.total;
    mappedVenta.cantidad = ventaDto.cantidad;

    return mappedVenta;
}
}
