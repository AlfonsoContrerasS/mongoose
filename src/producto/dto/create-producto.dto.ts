import { ApiProperty } from "@nestjs/swagger";

export class CreateProductoDto {
    @ApiProperty({example: 'pantalon', description: 'Nombre del producto'})
    readonly nombre: string;
    @ApiProperty({example: 'ropa', description: 'Categoria del producto'})
    readonly categoria: string;
    @ApiProperty({example: 100, description: 'Precio del producto'})
    readonly precio: number;

}
