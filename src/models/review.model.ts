import { Schema, model } from 'mongoose';
import { IReview, IReviewModel } from '../interfaces/review.interface';
import { Tour } from './tour.model';

const reviewSchema = new Schema<IReview, IReviewModel>({
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
});

// compound field unique ex: 1 user can review at 1 time
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

// calculate rating avg and review count in a specific user
reviewSchema.statics.calcAverageRating = async function (
  tourId: Schema.Types.ObjectId,
) {
  const stats = await this.aggregate([
    {
      $match:{tour: tourId},
    },
    {
      $group: {
        _id: '$tour',
        numberOfRatings: { $sum: '$rating' },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);
  if(stats.length>0){
    await Tour.findByIdAndUpdate(tourId,{
      ratingQuantity:stats[0].numberOfRatings,
      ratingAverage:stats[0].avgRating,
    })
  }else{
    await Tour.findByIdAndUpdate(tourId,{
      ratingQuantity:0,
      ratingAverage:0,
    })

  }
};

export const Review = model<IReview, IReviewModel>('Review', reviewSchema);
