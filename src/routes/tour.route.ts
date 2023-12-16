import express, { NextFunction, Request, Response } from "express";
import { tourController } from "../controllers/tour.controller";

const router= express.Router();

router.post('/create-tour',tourController.createTour);
router.get('/',tourController.getAllTours);
router.get('/:id',
(req:Request,res:Response,next:NextFunction)=>{
    const id=req.params.id;
    req.body.id=id;
    next();
}
,tourController.getSingleTour);
router.get('/:id/next-schedule',tourController.getNextSchedule);
router.patch('/:id',tourController.updateTour);
router.delete('/:id',tourController.deleteTour);

export const tourRoutes= router;