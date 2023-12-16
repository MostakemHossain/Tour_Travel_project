/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import GenericError from "../classes/errorClasses/GenericError";
import { IBooking } from "../interfaces/booking.interface";
import Booking from "../models/booking.model";
import { Tour } from "../models/tour.model";


const createBooking= async(bookingData:IBooking):Promise<IBooking>=>{
    const session= await mongoose.startSession();
    session.startTransaction();
    try{
       const booking= await Booking.create([bookingData],{session});
       if(!booking){
        throw new GenericError("Failed to create a new booking",400);
       }

       
       

       const tour= await Tour.findByIdAndUpdate(
        booking[0].tour,
        {
            $inc:{avaliableSeats:-booking[0].bookedSlots}
        },
        {
            session
        }
       )

       if(!tour){
        throw new GenericError("Tour update in Booking failed",400);
       }
       await session.commitTransaction();
       await session.endSession();

       return booking[0];
    }catch(err:any){
        await session.abortTransaction();
        await session.endSession();
        throw new GenericError(err,400);
    }
}

const getAllBookings= async():Promise<IBooking[]>=>{
    const result= await Booking.find({
   
    });
    return result;
}
const getSingleBooking= async(id:string):Promise<IBooking | null>=>{
    const result= await Booking.findById(id);
    return result;
}
const getAllBookingsOfAUser= async(id:string):Promise<IBooking[] | null>=>{
    const result= await Booking.find({
   user:id
    });
    return result;
}


const updateBooking= async(id:string,bookingData:IBooking):Promise<IBooking |null>=>{
    const result= await Booking.findByIdAndUpdate(id,bookingData,{new:true,
    runValidators:true,
    })
    return result;
}
const deleteBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndDelete(id);
  return result
}
export const bookingServices= {
    createBooking,
    getAllBookings,
    getSingleBooking,
    getAllBookingsOfAUser,
    updateBooking,
    deleteBooking
}