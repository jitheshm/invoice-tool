import { Types } from "mongoose";

export interface IUsers {
    _id?: Types.ObjectId
    name: string;
    email: string;
    password: string;
}