import {Document} from 'mongoose'

export default interface IUser extends Document{
    fullName: String;
    email: String;
    phone: String;
    password: String;
}