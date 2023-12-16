import { z } from "zod";

export const createTourValidationSchema = z.object({
    name: z.string(),
    durationHours: z.number().positive().int().refine(
        (data) => {
          if (data < 5) {
            return false;
          }
          return true; 
        },
        {
          message: 'Duration must be greater than 5 hours',
        },
      ),
    ratingAverage: z.number().positive().int().min(1).max(5),
    price: z.number().positive().int().min(1),
    discountPrice: z.number().positive().int().min(1).optional(),
    availableSeats: z.number().positive().int().min(1),
    imageCover: z.string().url(),
    images: z.array(z.string().url()),
    startLocation: z.string(),
    locations: z.array(z.string()),
  }).refine(
    (data) => {
      if (data.discountPrice === undefined) {
        return true;
      }
      return data.discountPrice <= data.price;
    },
    {
      message: 'Discount price must be less than or equal to price', 
    },
  );
