/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { reviewServices } from '../services/review.service';
import catchAsyncFunction from '../utils/catchAsync';
import sendSuccessResponse from '../utils/sendResponse';

const createReview = catchAsyncFunction(async (req: Request, res: Response) => {
  const reviewData = req.body;

  const result = await reviewServices.createReview(reviewData);
  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'Review created successfully',
    data: result,
  });
});
const getAllReviews = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const result = await reviewServices.getAllReviews();
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Review fetched successfully',
      data: result,
    });
  },
);
const getSingleReview = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await reviewServices.getSingleReview(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Review fetched successfully',
      data: result,
    });
  },
);
const updateReview = catchAsyncFunction(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await reviewServices.updateReview(id, req.body);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Review updated successfully',
    data: result,
  });
});
const deleteReview = catchAsyncFunction(async (req: Request, res: Response) => {
  const id = req.params.id;
  await reviewServices.deleteReview(id);
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Review deleted successfully',
    data: null,
  });
});

export const reviewController = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
