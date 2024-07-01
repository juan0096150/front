import { Router } from "express";
import rutaHome from "./routes.home";
import rutaDash from "./routes.dash";

const rutaMain = Router();

rutaMain.use("/",rutaHome);
rutaMain.use("/dashboard",rutaDash);

export default rutaMain;