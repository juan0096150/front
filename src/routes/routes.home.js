import { Router } from "express";
import {cluade, home} from "../controllers/controllers.home";

const rutaHome = Router();

rutaHome.get("/", home)
rutaHome.get("/cluade", cluade)
export default rutaHome;
