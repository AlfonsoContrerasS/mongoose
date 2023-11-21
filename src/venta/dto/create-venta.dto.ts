import { ApiProperty } from "@nestjs/swagger";

export class CreateVentaDto {
    @ApiProperty({example: '655cc166a1b10923fb9f500d', description: 'id del producto'})
    readonly idProducto: string;
    @ApiProperty({example: 1, description: 'Cantidad de productos'})
    readonly cantidad: number;

}
