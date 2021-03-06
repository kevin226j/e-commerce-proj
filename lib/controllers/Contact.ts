import {ContactModel as Contact} from '../models/Contact'
import IContact from '../interfaces/IContact'
import {Request, Response} from 'express'

export class ContactController {
    public async addContact (req: Request, res: Response) {
        await new Contact(req.body).save()
            .then((contact: IContact) => res.json(contact))
            .catch(err => res.send(err))        
    }

    public async getContacts (req: Request, res: Response) {
        await Contact.find({})
            .then((contacts: IContact[]) => res.json(contacts))
            .catch(err => res.send(err))
    }

    public async getContactById(req: Request, res: Response) {
        await Contact.findById(req.params.contactId)
            .then((contact: IContact) => res.json(contact))
            .catch(err => res.send(err))
    }


    public async updateContact(req: Request, res: Response) {
        await Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new : true})
            .then((contact: IContact) => res.json(contact))
            .catch(err => res.send(err))
    }

    public async deleteContact(req: Request, res: Response) {
        await Contact.deleteOne({_id: req.params.contactId})
            .then((res:any) => res.json({msg: 'Delete Successful'}))
            .catch(err => res.send(err))
    }
}