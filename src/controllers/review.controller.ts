/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { reviewServices } from '../services/review.service';
import sendSuccessResponse from '../utils/sendResponse';

const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reviewData = req.body;

    const result = await reviewServices.createReview(reviewData);
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Review created successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const getAllReviews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await reviewServices.getAllReviews();
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Review fetched successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const getSingleReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await reviewServices.getSingleReview(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Review fetched successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const updateReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await reviewServices.updateReview(id, req.body);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Review updated successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    await reviewServices.deleteReview(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Review deleted successfully',
      data: null,
    });
  } catch (err: any) {
    next(err);
  }
};

export const reviewController = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
