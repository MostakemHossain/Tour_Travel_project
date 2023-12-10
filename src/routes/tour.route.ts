import express from "express";
import { tourController } from "../controllers/tour.controller";

const router= express.Router();

router.post('/create-tour',tourController.createTour);
router.get('/',tourController.getAllTours);
router.get('/:id',tourController.getSingleTour);
router.get('/:id/next-schedule',tourController.getNextSchedule);
router.patch('/:id',tourController.updateTour);
router.delete('/:id',tourController.deleteTour);

export const tourRoutes= router;