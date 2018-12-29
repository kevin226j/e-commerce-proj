import { Document } from "mongoose";

export default interface IContact extends Document{
    id: string;
    firstName: string;
    lastName: String;
    email: String;
    phone: String;
    createdAt: Date;
    updatedAt: Date;
}