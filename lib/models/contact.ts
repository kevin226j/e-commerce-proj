import {Schema, model} from 'mongoose'

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

export const ContactModel = model('contact', ContactSchema);