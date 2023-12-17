/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { tourServices } from '../services/tour.service';
import catchAsyncFunction from '../utils/catchAsync';
import sendSuccessResponse from '../utils/sendResponse';

const createTour = catchAsyncFunction(async (req: Request, res: Response) => {
  const tourData = req.body;
  const result = await tourServices.createTour(tourData);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Tour created successfully',
    data: result,
  });
});
const getAllTours = catchAsyncFunction(async (req: Request, res: Response) => {
  const result = await tourServices.getAllTours(req.query);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Tour fetched successfully',
    data: result,
  });
});
const getSingleTour = catchAsyncFunction(
  async (req: Request, res: Response) => {
    // const id = req.params.id;
    const id= req.body.id;
    const result = await tourServices.getSingleTour(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Tour fetched successfully',
      data: result,
    });
  },
);
const updateTour = catchAsyncFunction(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await tourServices.updateTour(id, req.body);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Tour updated successfully',
    data: result,
  });
});
const deleteTour = catchAsyncFunction(async (req: Request, res: Response) => {
  const id = req.params.id;
  await tourServices.deleteTour(id);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Tour deleted successfully',
    data: null,
  });
});
const getNextSchedule = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await tourServices.getNextSchedule(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Next Schedule fetched successfully',
      data: result,
    });
  },
);

export const tourController = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
};
