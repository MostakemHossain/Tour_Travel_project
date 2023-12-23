import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../app/config';
import { USER_ROLE } from "../constants/user.constants";
import { User } from '../models/user.model';
import catchAsyncFunction from '../utils/catchAsync';

export const checkAuth = (...roles:Array<keyof typeof USER_ROLE>)=>{
   return  catchAsyncFunction(
        async (req: Request, res: Response, next: NextFunction) => {
          const token= req.headers.authorization
          if(!token){
            throw new Error("Invilid credintials")
          }
          const verifyToken = jwt.verify(token,config.jwt_access_serect as string);
          const {email} =verifyToken as JwtPayload;
          const user = await User.findOne({ email});
          // authentication
          if (!user) {
            throw new Error('Invilid email & password');
          }
          //authorization
          if (!roles.includes(user?.role)) {
            throw new Error('you are not authorized');
          }
          next();
        },
      );
}
