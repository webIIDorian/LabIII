import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Cabecera_Factura } from "./Cabecera_Factura";


@Entity()
export class Cliente{
    @PrimaryColumn()
    ruc_cliente:number;

    @Column()
    nommbres_cliente:String

    @Column()
    apellido_cliente:String

    @Column()
    direccion_cliente:String

    @Column()
    telefono_cliente:String

    @OneToMany(() => Cabecera_Factura, (cabecera) => cabecera.ruc_cliente)
    facturas: Cabecera_Factura[];

    
}