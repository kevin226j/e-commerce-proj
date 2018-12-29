import * as mongoose from 'mongoose'
import {ContactSchema} from '../models/contact'
import {Request, Response} from 'express'
import * as amqp from 'amqplib'

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {
    public async addContact (req: Request, res: Response) {
        let newContact = new Contact(req.body);
        
        await newContact.save((err, contact)=>{
            (err) ? res.send(err) : res.json(contact);
        })
    }

    public getContacts (req: Request, res: Response) {
        Contact.find({}, (err, contact)=> {
            (err) ? res.send(err) : res.json(contact);
        })
    }

    public getContactById(req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            (err) ? res.send(err) : res.json(contact);
        })
    }


    public updateContact(req: Request, res: Response) {
        Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new : true}, (err,contact)=>{
            (err) ? res.send(err) : res.json(contact);
        })
    }

    public deleteContact(req: Request, res: Response) {
        Contact.deleteOne({_id: req.params.contactId}, (err) =>{
            (err) ? res.send(err) : res.json({msg: 'deleted contact!'});
        })
    }
}