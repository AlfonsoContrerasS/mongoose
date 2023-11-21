import { VentaDto } from "../dto/venta.dto";
import { Venta } from "../schemas/venta.schema";


export function mapVenta(venta: Venta): VentaDto {
    const mappedVenta = new VentaDto();

    mappedVenta.nombreProducto = venta.producto[0].nombre;
    mappedVenta.fecha = venta.fecha;
    mappedVenta.total = venta.total;

    return mappedVenta;
}
