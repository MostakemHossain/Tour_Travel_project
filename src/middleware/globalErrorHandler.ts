/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
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

  const errorResponse: TErrorResponse = {
    statusCode: err.statusCode,
    status: err.status || 'error',
    message: err.message || 'Something went wrong',
    issues: err.issues || [],
  };

  if (err instanceof mongoose.Error.ValidationError) {
    errorResponse.statusCode = 400;
    errorResponse.message = "validation Error";
    errorResponse.status = 'error';
    const errorValues = Object.values(err.errors);
    errorValues.forEach(
      (errObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        errorResponse.issues.push({
          path: errObj.path,
          message: errObj.message,
        });
      },
    );
  }

  res.status(errorResponse.statusCode).json({
    status: errorResponse.status,
    message: errorResponse.message,
    issues: errorResponse.issues,
    // err: err,
  });
};
