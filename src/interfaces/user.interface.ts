
interface IUser{
    name:string;
    age:number;
    gender:string;
    email:string;
    password:string,
    passwordChangeAt:Date,
    photo:string;
    role:'admin'|'user';
    userStatus:'active'|'inactive';
}
export { IUser };
