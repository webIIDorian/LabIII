
import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./Categoria";
import { Proveedor } from "./Proveedor";
import { Detalle_factura } from "./Detalle_factura";

@Entity()
export class Productos{
 
    @PrimaryColumn()
    @IsNotEmpty({message:'Debe indicar el ID.'})  
    id:number;
    @Column({length:50,nullable:false})
    @MaxLength(50,{message:'Debe contener un máximo de 50 caracteres.'})
    @IsNotEmpty({message:'Debe indicar el nombre del producto.'})
    nombre: string;
    @Column()
    @IsNotEmpty({message:'Debe indicar el precio.'}) 
    @IsNumber()
    precio: number;
    @Column()
    @IsPositive({message:'Debe indicar un valor positivo'})
    @IsNotEmpty({message:'Debe indicar el stock.'})  
    stock:number;
    
    @IsNotEmpty({message:'Debe indicar la categoria.'})  
    @ManyToOne(()=>Categoria, (categoria)=> categoria.Productos)   
    categoria: Categoria;

    @Column({default:1})
    estado: boolean;

    @IsNotEmpty({message:'Debe indicar la categoria.'})  
    @ManyToOne(()=>Proveedor, (proveedor)=> proveedor.Productos)   
    proveedor: Proveedor;

    @OneToMany(() => Detalle_factura, (detalleFactura) => detalleFactura.producto)
    detallesFactura: Detalle_factura[];

}