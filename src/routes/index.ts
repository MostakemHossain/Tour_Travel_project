import express from "express";
import routes from "../constants/routes.constant";
const globalRoutes= express.Router();

routes.forEach((route)=>{
    globalRoutes.use(route.path,route.route);
})

export default globalRoutes;