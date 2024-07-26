import "reflect-metadata"
import { DataSource } from "typeorm"

import { Productos } from "./entity/Productos"
import { Categoria } from "./entity/Categoria"
import { Proveedor } from "./entity/Proveedor"
import { Usuarios } from "./entity/Usuarios"
import { Cabecera_Factura } from "./entity/Cabecera_Factura"
import { Cliente } from "./entity/Cliente"
import { Detalle_factura } from "./entity/Detalle_factura"
import { Vendedor } from "./entity/Vendedor"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "tamara11",
    database: "sakura",
    synchronize: true,
    logging: false,
    entities: [ Productos, Categoria,Proveedor, Usuarios, Cabecera_Factura, Cliente, Detalle_factura, Vendedor],
    migrations: [],
    subscribers: [],
})
