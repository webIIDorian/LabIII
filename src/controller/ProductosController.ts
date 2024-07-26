
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
//import { Producto } from "../entity/Producto
import { request } from "http"
import { Productos } from "../entity/Productos"
import { ValidationError, validate } from "class-validator"


class ProductosController{
 
    static getAll= async(req:Request, resp:Response)=>{
        try {
            const repo = AppDataSource.getRepository(Productos)
             const lista = await repo.find();

            if((lista.length==0)){
                return resp.status(404).json({message:"Malo malo no hay nada aqui llamen a la policia"})
            }

           return resp.status(200).json(lista)
            

          
        } catch (error) {
            return resp.status(400).json("Servidor caido llamen a la policia")
            
        }
        
    }

    
   


    static create= async(req:Request, resp:Response)=>{
        const repProduct= AppDataSource.getRepository(Productos);
        //desestructuracion 
        try {
           const {id, nameProduct, priceProduct, categProduct}= req.body;
           /* if(!id){
                return resp.status(404).json({message:"indique id pa"})
            }
            if(!nameProduct){
                return resp.status(404).json({message:"indique el name pa"})
            }
            if(!priceProduct){
                return resp.status(404).json({message:"indique precio pa"})
            }
            if(!categProduct){
                return resp.status(404).json({message:"indique categoria shh pa"})
            }*/
            //reglas de negocio

            //clasvalidator

           // const validateOp= {ValidationError:{target:false , value:false}}
            
            //crear objeto
            let Produc = await repProduct.findOne({where:{id}})
           
         
           //creacion de productico
         
            Produc= new Productos;
            Produc.id=id;
            Produc.nombre=nameProduct
            
            Produc.precio=priceProduct
            Produc.categoria=categProduct


            const errors=await validate(Produc,{validationError:{target:false, value: false}});

            if(errors.length>0){
                return resp.status(400).json({errors})
            }
            await repProduct.save(Produc);
          

        } catch (error) {
            return resp.status(404).json({mesagge:"algo tiene malo yo no se que es " +error})
            
        }
        
        return resp.status(200).json("All its ok in create object")
    }

    static getOne= async(req:Request, resp:Response)=>{
       const id = parseInt(req.params['id']);
        try {
            
            
            if(!id){
                return resp.status(400).json({message:""})
            }
            const repo= AppDataSource.getRepository(Productos)
           
            const producto = await repo.findOne({where:{id}})//aqui busco ese id 
            //es el campo que estoy sacando del body

            if (!producto) {
                return resp.status(404).json({ message: "Producto no encontrado" });
            }
            
            return resp.status(200).json(producto);
          


            //const producto= await repo.findOneByOrFail(id)
        } catch (error) {
            return resp.status(500).json({ message: "Error al obtener el producto: " + error });
           
        }
    }


    //con esta funcion de tipo booleana lo que hago es que le paso por parametro el id
    //una vez que se encuentra con el metodo findOne que me devuelva true, aqui estoy utilizando
    //logica negada pero en realidad funciona de  las dos maneras
    //el metodo delete si funciono con esta funcion pero se requeria un eliminado booleano entonces lo cambie
    static getOneBool= async(req:Request, resp:Response , id): Promise<boolean> => {
       
        const repo= AppDataSource.getRepository(Productos)
        const producto = await repo.findOne({where:{id}}) 

        if(!producto){
            return false
        }
        return true
        
    }

    static delete= async(req:Request, resp:Response)=>{
       const id = parseInt(req.params['id']);
        const repo= AppDataSource.getRepository(Productos)
        try {
           // let productExists = await this.getOneBool(req, resp, id)//recordar el await ya que la funcion get bool es asincrona
            //batalle entendiendo por que pasaba directo y borraba lo que fuera :"/
            let product =await repo.findOneOrFail({where:{id}})
            if(!product){
                return resp.status(404).json(`Producto con id= ${id}, no fue encontrado sorryyy`);
            }
            else{
                product.estado=false
                //await repo.delete(id)
               await repo.save(product)

                return resp.status(200).json(`Producto con id= ${id}, se desactivo existosamente`);

            }
     


        } catch (error) {
            resp.status(500).json({ error: 'Error interno al eliminar el producto' });
        }
    }

    static update= async(req:Request, resp:Response)=>{
        const repo= AppDataSource.getRepository(Productos)
        const id = parseInt(req.params['id']);
        const { nameProduct, priceProduct, categProduct}= req.body;

        let produc;
     

        try {
            produc =await repo.findOneOrFail({where:{id}})  

        } catch (error) {
             return resp.status(404).json(`Producto con id= ${id}, no fue encontrado`);
        }

        /*if(!id){
            return resp.status(404).json({message:"indique id pa"})
        }
        if(!nameProduct){
            return resp.status(404).json({message:"indique el name pa"})
        }
        if(!priceProduct){
            return resp.status(404).json({message:"indique precio pa"})
        }
        if(!categProduct){
            return resp.status(404).json({message:"indique categoria shh pa"})
        }
        */
       
        produc.nameProduct=nameProduct
        
        produc.priceProduct=priceProduct
        produc.categProduct=categProduct
        await repo.save(produc)
        return resp.status(200).json(`Producto con id= ${id}, se actualizo existosamente`);
    }
}



export default ProductosController;