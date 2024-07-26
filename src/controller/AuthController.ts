import { Request, Response } from "express";
import { request } from "http";
import { AppDataSource } from "../data-source";
import { Usuarios } from "../entity/Usuarios";
import * as bycript from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import config  from "../config/config";


class AuthController{
 
    static login= async(req:Request, resp:Response)=>{
        const {username,password}= req.body;
       
        try {
            
            if(!(username || password)){
                return resp.status(400).json({message:"Usuario o contraseña incorrecta"})
            }
            const repoUsuario = AppDataSource.getRepository(Usuarios);
            let usuario: Usuarios;
            
            try {
                usuario = await repoUsuario.findOneOrFail({where:{username}});
           } catch (error) {
               return resp.status(400).json({message:"Usuario o contraseña incorrecta"})
           }

           if(!bycript.compare(password, usuario.password)){
            return resp.status(404).json({message:"Usuario o contraseña incorrecta"})
        }
        const token = jwt.sign({id:usuario.id}, config.jwtSecret, {expiresIn:'10m'})
        return resp.status(200).json({token, message:'All its ok', role:usuario.role, usuario:usuario.username })

        } catch (error) {
           
           
            
            
           
        }
    }
}
export default AuthController;