import { IBooking } from "../interfaces/booking.interface";
import Booking from "../models/booking.model";


const createBooking= async(bookingData:IBooking):Promise<IBooking>=>{
    const result= await Booking.create(bookingData);
    return result;
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
    updateBooking,
    deleteBooking
}