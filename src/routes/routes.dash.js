import { Router } from "express";

const rutaDash = Router();

rutaDash.get("/", (req,res)=>{
    res.send("<h1>ruta principal dash</h1>")
})

rutaDash.get("/contactos", (req,res)=>{
    res.send("<h1>ruta contactos dash</h1>")
})

rutaDash.get("/lista",(req,res)=>{
    res.send("<h1>ruta lista dash</h1>")
})

rutaDash.get("/producto",(req,res)=>{
    res.send("<h1>ruta producto dash</h1>")
})
export default rutaDash;