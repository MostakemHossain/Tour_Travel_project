/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { bookingServices } from "../services/booking.service";


const createBooking= async (req:Request,res:Response)=>{
    try{
        const bookingData= req.body;
        const result= await bookingServices.createBooking(bookingData);
        res.status(201).json({
            status:'success',
            message: "Booking created successfully",
            data: result
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const getAllBookings= async (req:Request,res:Response)=>{
    try{
        
        const result= await bookingServices.getAllBookings();
        res.status(200).json({
            status:'success',
            message: "Booking fetched successfully",
            data: result
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const getSingleBooking= async (req:Request,res:Response)=>{
    try{
        const id= req.params.id;
        const result= await bookingServices.getSingleBooking(id);
        res.status(200).json({
            status:'success',
            message: "Booking fetched successfully",
            data: result
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const updateBooking= async (req:Request,res:Response)=>{
    try{
        const id= req.params.id;
        const result= await bookingServices.updateBooking(id,req.body);
        res.status(200).json({
            status:'success',
            message: "Booking updated successfully",
            data: result
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const deleteBooking= async (req:Request,res:Response)=>{
    try{
        const id= req.params.id;
         await bookingServices.deleteBooking(id);
        res.status(200).json({
            status:'success',
            message: "Booking deleted successfully",
          
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}

export const bookingController= {
    createBooking,
    getAllBookings,
    getSingleBooking,
    updateBooking,
    deleteBooking
}