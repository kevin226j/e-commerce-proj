import { Request, Response } from 'express'
import { ContactController } from '../controllers'


export class Routes {

    public contactController: ContactController = new ContactController();

    public routes(app): void {

        //GET 
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send({ msg: 'GET SUCCESSFUL!' })
        })

        //CONTACT
        app.route('/contact')
            .get(this.contactController.getContacts)
            .post(this.contactController.addContact);

        //CONTACT DETAIL
        app.route('/contact/:contactId')
            .get(this.contactController.getContactById)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact)
    }
}