import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ContactSchema = new Schema({
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