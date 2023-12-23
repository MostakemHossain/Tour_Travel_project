import jwt from "jsonwebtoken";
import config from "../app/config";
import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";

interface IRegister extends Omit<IUser,'userStatus'|'role'|'passwordChangeAt'>{


}

const register= async(payload:IRegister)=>{
    const result= await User.create({
        ...payload,
        userStatus:'active',
        role:'user'
    })
    return result;

}

interface ILogin{
    email:string,
    password:string
}

const login= async(payload:ILogin)=>{

    // check if the user is exists
    const user= await User.findOne(payload);
    
    if(!user) throw new Error('Email or Password is incorrect');

    const jwtPayload= {
        email:user?.email,
        role:user?.role
    }
    const accessToken= jwt.sign(jwtPayload,config.jwt_access_serect as string,{
        expiresIn:config.jwt_access_expires_in
    })
    return {
        accessToken
    }
}

export const authService= {
    register,
    login
}