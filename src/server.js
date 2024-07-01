import express from "express";
import { config } from "dotenv";
import rutaMain from "./routes";
import ejs from "ejs";
import path from "path";
config();

const server = express();

server.set('view engine', 'ejs');
server.set("views", path.join(__dirname,"views"));
server.set("puerto",process.env.PUERTO || 8000);
server.use(express.static(path.join(__dirname, "public")))

server.use("/",rutaMain);

server.use("/",(req,res)=>{
    res.render("views.error404.ejs")
})

export default server;