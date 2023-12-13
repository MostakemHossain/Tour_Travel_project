import { Schema, model } from "mongoose";
import { IReview } from "../interfaces/review.interface";

const reviewSchema = new Schema<IReview>(
    {
      review: {
        type: String,
        required: [true, 'Please tell us your review'],
      },
      rating: {
        type: Number,
        required: [true, 'Please tell us your rating'],
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      tour: {
        type: Schema.Types.ObjectId,
        ref: 'Tour',
        required: [true, 'Please tell us your tour'],
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please tell us your user'],
      },
    },
   
  )

  // compound field unique ex: 1 user can review at 1 time
  reviewSchema.index({tour:1,user:1},{unique:true});

  export const Review= model<IReview>('Review',reviewSchema);