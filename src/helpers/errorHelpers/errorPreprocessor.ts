/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import { ZodError } from 'zod';
import GenericError from '../../classes/errorClasses/GenericError';
import { TErrorResponse } from '../../types/TErrorResponse';
import handleCastError from './handleCaseError';
import handleDuplicateError from './handleDuplicateError';
import handleGenericError from './handleGenericError';
import handleValidationError from './handleValidationError';
import handleZodError from './handleZodError';

const errorPreProcessor = (err: any): TErrorResponse => {

  if(err instanceof ZodError){
    return handleZodError(err);
  }

  else if (err instanceof mongoose.Error.ValidationError) {
    return handleValidationError(err);
  } else if (err.code && err.code === 11000) {
    return handleDuplicateError(err);
  } else if (err instanceof mongoose.Error.CastError) {
    return handleCastError(err);
  } else if (err instanceof GenericError) {
    return handleGenericError(err);
  } else {
    return {
      statusCode: 500,
      status: 'error',
      message: 'Unknown Error',
      issues: [
        {
          path: '',
          message: err.message,
        },
      ],
    };
  }
};

export default errorPreProcessor;
