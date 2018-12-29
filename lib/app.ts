import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import {Routes} from './routes'

class App {
    public mongoUrl : string = 'mongodb://localhost/ecommerceDB';
    public app: express.Application;
    public routePrv : Routes = new Routes();


    constructor() {
        this.app = express();
        this.config();
        this.mongoSetUp();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        //support application/json type post data
        this.app.use(bodyParser.json());

        ////support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    private mongoSetUp(): void {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true}).then(()=>console.log('DB connected')).catch(err => console.log(err));
    }

}

export default new App().app;