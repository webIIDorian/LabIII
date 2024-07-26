import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Detalle_factura } from "./Detalle_factura";
import { Vendedor } from "./Vendedor";


@Entity()
export class Cabecera_Factura{
    @PrimaryColumn()
    numero:number;

    @Column()
    fecha:Date

    @Column()
    ruc_cliente:number

    @Column()
    codigo_vendedor:number


    @OneToMany(() => Detalle_factura, (detalleFactura) => detalleFactura.cabezeraFactura)
    detallesFactura: Detalle_factura[];

    @ManyToOne(() => Vendedor, (vendedor) => vendedor.facturas)
    vendedor: Vendedor;


}