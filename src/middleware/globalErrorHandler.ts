/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import handleDuplicateError from '../helpers/errorHelpers/handleDuplicateError';
import handleValidationError from '../helpers/errorHelpers/handleValidationError';
import { TErrorResponse } from '../types/TErrorResponse';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // const statusCode = res.statusCode || 500;
  // const message= err.message || 'Something went wrong';
  // const status=err.status || 'error';

  let errorResponse: TErrorResponse = {
    // Fall back error response
    statusCode: err.statusCode || 500,
    status: err.status || 'error',
    message: err.message || 'Something went wrong',
    issues: err.issues || [],
  };

  if (err instanceof mongoose.Error.ValidationError) {
    errorResponse=handleValidationError(err);
  }else if(err.code && err.code===11000){
    errorResponse= handleDuplicateError(err);
  }

  res.status(errorResponse.statusCode).json({
    status: errorResponse.status,
    message: errorResponse.message,
    issues: errorResponse.issues,
    // err: err, 
  });
};
