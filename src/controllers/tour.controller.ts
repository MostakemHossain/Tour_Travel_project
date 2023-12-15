/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { tourServices } from '../services/tour.service';
import sendSuccessResponse from '../utils/sendResponse';

const createTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tourData = req.body;
    const result = await tourServices.createTour(tourData);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Tour created successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const getAllTours = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await tourServices.getAllTours();
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Tour fetched successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const getSingleTour = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await tourServices.getSingleTour(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Tour fetched successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const updateTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const result = await tourServices.updateTour(id, req.body);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Tour updated successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const deleteTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    await tourServices.deleteTour(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Tour deleted successfully',
      data: null,
    });
  } catch (err: any) {
    next(err);
  }
};
const getNextSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await tourServices.getNextSchedule(id);
    res.status(200).json({
      status: 'success',
      message: 'Next Schedule fetched successfully',
      date: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const tourController = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
};
