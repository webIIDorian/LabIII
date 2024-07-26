import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Productos } from "./Productos";


@Entity()
export class Proveedor{

    @PrimaryColumn()
    @IsNotEmpty({message:'Debe indicar el ID.'})  
    codigoProveedor:number;

    @Column()
    nombresProveedor:String

    @Column()
    apellidoProveedor:String

    @Column()
    direccionProveedor:String

    @Column()
    telefonoProveedor:String

    @Column()
    celularProveedor:String

    @OneToMany(()=> Productos, (productos)=> productos.proveedor )
    Productos:Productos[]


}