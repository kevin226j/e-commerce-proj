import { Router } from 'express'
import { ContactController } from '../controllers/Contact'


export default class ContactRoute {

    public router : Router
    public contactController: ContactController = new ContactController();

    constructor(){
        this.router = Router();
        this.init();
    }

    public init() {
        this.router.route('/')
            .get(this.contactController.getContacts)
            .post(this.contactController.addContact);

        this.router.route('/:contactId')
            .get(this.contactController.getContactById)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}