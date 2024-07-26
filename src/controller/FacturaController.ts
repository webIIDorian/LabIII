
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"

import { ValidationError, validate } from "class-validator"
import { Detalle_factura } from "../entity/Detalle_factura"


class FacturaController{
 
    



    static createDetalle= async(req:Request, resp:Response)=>{
        const repDetalle= AppDataSource.getRepository(Detalle_factura);
        //desestructuracion 
        try {
           const {numero, cantidad,  codigo_producto, producto, cabeceraFactura}= req.body;
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
            let detalle = await repDetalle.findOne({where:{numero}})
           
         
           //creacion de productico
         
           detalle= new Detalle_factura;
           detalle.numero=numero;
           detalle.cantidad=cantidad
           detalle.codigo_producto = codigo_producto;
           detalle.producto = codigo_producto;
           detalle.cabezeraFactura = numero;  
            
      
          


            const errors=await validate(detalle,{validationError:{target:false, value: false}});

            if(errors.length>0){
                return resp.status(400).json({errors})
            }
            await repDetalle.save(detalle);
          

        } catch (error) {
            return resp.status(404).json({mesagge:"algo tiene malo yo no se que es " +error})
            
        }
        
        return resp.status(200).json("All its ok in create object")
    }

    
    


 


}



export default FacturaController;