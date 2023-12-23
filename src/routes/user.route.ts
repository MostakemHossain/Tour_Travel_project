import express, { NextFunction, Request, Response } from "express";
import { userController } from "../controllers/user.controller";
import { User } from "../models/user.model";
import catchAsyncFunction from "../utils/catchAsync";

const router= express.Router();

router.post('/create-user',userController.createUser);
router.get('/',
catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      const email = req.body.email;
      const password = req.body.password;
      const user = await User.findOne({ email, password });
      // authentication
      if (!user) {
        throw new Error('Invilid email & password');
      }
      //authorization
      if (user?.role !== 'admin') {
        throw new Error('you are not authorized');
      }
      next();
    },
  ),
userController.getAllUsers);
router.get('/:id',userController.getSingleUser);
router.patch('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);

export const userRoutes= router;