import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Productos } from "./Productos";
import { Cabecera_Factura } from "./Cabecera_Factura";


@Entity()
export class Detalle_factura{

    @PrimaryColumn()
    numero:number;

    @Column()
    cantidad:number

    @Column()
    codigo_producto:number

  

    @ManyToOne(() => Productos, (producto) => producto.detallesFactura)
    producto: Productos;

    @ManyToOne(() => Cabecera_Factura, (cabecera) => cabecera.detallesFactura)
  cabezeraFactura: Cabecera_Factura;



}