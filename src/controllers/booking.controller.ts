/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { bookingServices } from '../services/booking.service';
import sendSuccessResponse from '../utils/sendResponse';

const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookingData = req.body;
    const result = await bookingServices.createBooking(bookingData);
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Booking created successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const getAllBookings = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await bookingServices.getAllBookings();
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Booking fetched successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const getSingleBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await bookingServices.getSingleBooking(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Tour fetched successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const updateBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await bookingServices.updateBooking(id, req.body);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Booking updated successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const deleteBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    await bookingServices.deleteBooking(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Booking deleted successfully',
      data: null,
    });
  } catch (err: any) {
    next(err);
  }
};

export const bookingController = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
};
