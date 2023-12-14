/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { tourServices } from "../services/tour.service";


const createTour= async (req:Request,res:Response)=>{
    try{
        const tourData= req.body;
        const result= await tourServices.createTour(tourData);
        res.status(201).json({
            status:'success',
            message: "Tour created successfully",
            data: result
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const getAllTours= async (req:Request,res:Response)=>{
    try{
        
        const result= await tourServices.getAllTours();
        res.status(200).json({
            status:'success',
            message: "Tour fetched successfully",
            data: result
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const getSingleTour= async (req:Request,res:Response)=>{
    try{
        const id= req.params.id;
        const result= await tourServices.getSingleTour(id);
        res.status(200).json({
            status:'success',
            message: "Tour fetched successfully",
            data: result
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const updateTour= async (req:Request,res:Response)=>{
    try{
        const id= req.params.id;
        const result= await tourServices.updateTour(id,req.body);
        res.status(200).json({
            status:'success',
            message: "Tour updated successfully",
            data: result
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const deleteTour= async (req:Request,res:Response)=>{
    try{
        const id= req.params.id;
         await tourServices.deleteTour(id);
        res.status(200).json({
            status:'success',
            message: "Tour deleted successfully",
          
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const getNextSchedule= async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const id= req.params.id;
        const result= await tourServices.getNextSchedule(id);
        res.status(200).json({
            status:'success',
            message: "Next Schedule fetched successfully",
            date:result
          
        })

    }catch(err:any){
       next(err);
    }
}

export const tourController= {
    createTour,
    getAllTours,
    getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule
}