
interface IUser{
    name:string;
    age:number;
    gender:string;
    email:string;
    photo:string;
    role:'admin'|'user';
    userStatus:'active'|'inactive';
}
export { IUser };
