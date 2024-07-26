
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
//import { Producto } from "../entity/Producto
import { request } from "http"
import { Productos } from "../entity/Productos"
import { ValidationError, validate } from "class-validator"
import { Categoria } from "../entity/Categoria"


class CategoriasController{
 
    static getAll= async(req:Request, resp:Response)=>{

        try {
            const repo = AppDataSource.getRepository(Categoria)
             const lista = await repo.find({where:{estado:true}, relations:{Productos:true}});

            if((lista.length==0)){
                return resp.status(404).json({message:"Malo malo no hay nada aqui llamen a la policia"})
            }

           return resp.status(200).json(lista)
            

          
        } catch (error) {
            return resp.status(400).json("Servidor caido llamen a la policia")
            
        }
        
    }

    static getOne= async(req:Request, resp:Response)=>{
       const id = parseInt(req.params['id']);
        try {
            
            
            if(!id){
                return resp.status(400).json({message:""})
            }
            const repo= AppDataSource.getRepository(Categoria)
           
            const categoria = await repo.findOne({where:{id, estado:true}, relations:{Productos:true}})//aqui busco ese id 
            //es el campo que estoy sacando del body

            if (!categoria) {
                return resp.status(404).json({ message: "Producto no encontrado" });
            }
            
            return resp.status(200).json(categoria);
          


            //const producto= await repo.findOneByOrFail(id)
        } catch (error) {
            return resp.status(500).json({ message: "Error al obtener el producto: " + error });
           
        }
    }


   

}
export default CategoriasController;