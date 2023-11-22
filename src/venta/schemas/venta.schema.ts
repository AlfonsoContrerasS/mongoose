import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";
import { Producto } from "src/producto/schemas/producto.schema";

@Schema({ collection: 'venta'})
export class Venta {
    
    @Prop({name: 'producto', type: ObjectId, ref: 'Producto'})
    producto: Producto;

    @Prop({name: 'cantidad'})
    cantidad: number;

    @Prop({name: 'total'})
    total: number;

    @Prop({name: 'fecha'})
    fecha: Date;
}

export const ventaSchema = SchemaFactory.createForClass(Venta);
