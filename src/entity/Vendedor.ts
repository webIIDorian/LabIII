import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Cabecera_Factura } from "./Cabecera_Factura";


@Entity()
export class Vendedor{
    @PrimaryColumn()
    codigo_vendedor:number;

    @Column()
    nommbres_vendedor:String

    @Column()
    apellido_vendedor:String

    @Column()
    direccion_vendedor:String

    @Column()
    telefono_vendedor:String

    @Column()
    celular_vendedor:String

    @OneToMany(() => Cabecera_Factura, (cabecera) => cabecera.vendedor)
  facturas: Cabecera_Factura[];



}