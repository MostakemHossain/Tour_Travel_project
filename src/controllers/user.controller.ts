/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { userServices } from "../services/user.service";


const createUser= async (req:Request,res:Response)=>{
    try{
        const userData= req.body;
        const result= await userServices.createUser(userData);
        res.status(201).json({
            status:'success',
            message: "User created successfully",
            data: result
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const getAllUsers= async (req:Request,res:Response)=>{
    try{
        
        const result= await userServices.getAllUsers();
        res.status(200).json({
            status:'success',
            message: "User fetched successfully",
            data: result
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const getSingleUser= async (req:Request,res:Response)=>{
    try{
        const id= req.params.id;
        const result= await userServices.getSingleUser(id);
        res.status(200).json({
            status:'success',
            message: "User fetched successfully",
            data: result
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const updateUser= async (req:Request,res:Response)=>{
    try{
        const id= req.params.id;
        const result= await userServices.updateUser(id,req.body);
        res.status(200).json({
            status:'success',
            message: "User updated successfully",
            data: result
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}
const deleteUser= async (req:Request,res:Response)=>{
    try{
        const id= req.params.id;
         await userServices.deleteUser(id);
        res.status(200).json({
            status:'success',
            message: "User deleted successfully",
          
        })

    }catch(err:any){
        res.status(500).json({
            status: 'fail',
            message: err.message || 'Something went Wrong'
        })
    }
}

export const userController= {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}