import { Query, Schema, model } from 'mongoose';
import { ACCOUNT_STATUS, USER_ROLE } from '../constants/user.constants';
import { IUser } from '../interfaces/user.interface';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  age: {
    type: Number,
    required: [true, 'Please tell us your age'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please tell us your email'],
    lowercase: true,
  },
  password:{
    type:String,
    required:[true,'Please provide a password']

  },
  passwordChangeAt:{
    type:Date,
    default:null,
  },
  photo: String,
  role: {
    type: String,
    enum: Object.values(USER_ROLE),//['user''admin']
    default: 'user',
  },
  userStatus: {
    type: String,
    enum: Object.values(ACCOUNT_STATUS),
    default: ACCOUNT_STATUS.active,
  },
});



// pre find hook
userSchema.pre(/^find/,function(this:Query<IUser,Document>,next){
    this.find({userStatus:{$eq:'active'}})
    next();
})

//bengla system
// userSchema.pre('find',function(next){
//     this.find({userStatus:{$eq:'active'}})
//     next();
// })
// userSchema.pre('findOne',function(next){
//     this.findOne({userStatus:{$eq:'active'}})
//     next();
// })


export const User= model<IUser>('User',userSchema);
