import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: 'producto'})
export class Producto {

    @Prop({name: 'nombre'})
    nombre: string;

    @Prop({name: 'categoria'})
    categoria: string;

    @Prop({name: 'precio'})
    precio: number;

}

export const productoSchema = SchemaFactory.createForClass(Producto);
