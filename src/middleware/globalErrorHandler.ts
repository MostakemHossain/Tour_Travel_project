/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import config from '../app/config';
import errorPreProcessor from '../helpers/errorHelpers/errorPreprocessor';
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

  errorResponse= errorPreProcessor(err);

  

  res.status(errorResponse.statusCode).json({
    status: errorResponse.status,
    message: errorResponse.message,
    issues: errorResponse.issues,
    stack: config.node_env==="development"? err.stack : undefined,
    // err: err, 
  });
};
