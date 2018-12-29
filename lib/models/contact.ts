import {Schema, model, Model} from 'mongoose'
import IContact from '../interfaces/IContact'

const ContactSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
        required : 'Email required'
    },
    phone: {
        type: String,
        required: 'Enter phone number'
    }
}, {
    timestamps: true
});

export const ContactModel:Model<IContact> = model<IContact>('contact', ContactSchema);
