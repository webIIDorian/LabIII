import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Productos } from "./Productos";
import { Cabecera_Factura } from "./Cabecera_Factura";


@Entity()
export class Detalle_factura{

    @PrimaryColumn()
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    numero:number;

    @Column()
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    cantidad:number

    @Column()
    @IsNotEmpty()
    @IsNumber()
    codigo_producto:number
  
    @ManyToOne(() => Productos, (producto) => producto.detallesFactura)
    @IsNotEmpty()
    producto: Productos;
  
    @ManyToOne(() => Cabecera_Factura, (cabecera) => cabecera.detallesFactura)
    @IsNotEmpty()
    cabezeraFactura: Cabecera_Factura;





}