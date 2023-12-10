import { Schema, model } from "mongoose";
import { ITour } from "../interfaces/tour.interface";

const tourSchema = new Schema<ITour>(
    {
      name: {
        type: String,
        required: [true, 'Please tell us your name'],
      },
      durationHours: {
        type: Number,
        required: [true, 'Please tell us your durationHours'],
      },
      ratingAverage: {
        type: Number,
        default: 4.5,
      },
      ratingQuantity: {
        type: Number,
        default: 0,
      },
      price: {
        type: Number,
        required: [true, 'Please tell us your price'],
      },
      imageCover: {
        type: String,
        required: [true, 'Please tell us your imageCover'],
      },
      images: [String],
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      startDates: [Date],
      startLocation: {
        type: String,
        required: [true, 'Please tell us your startLocation'],
      },
      locations: [String],
      slug: String,
    },
   
  )

  export const Tour= model<ITour>('Tour',tourSchema);
