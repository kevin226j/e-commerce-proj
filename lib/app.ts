import * as express from 'express'
import * as http from 'http'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import * as dotenv from "dotenv";


export default class App {

    protected app: express.Application;
    protected server: http.Server;
    private db: mongoose.Connection;
    private routes: express.Router[] = [];
    private mode: string;

    public port: number

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.app.set('port', port);
        this.config();
        this.database();
    }

    /* configuration set up. */
    private config(): void {
        //support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        //create server
        this.server = http.createServer(this.app);


        this.mode = (process.env.PRODUCTION) ? 'production' : 'development';
        dotenv.config();
    }

    /* database set up. */
    private database(): void {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}); 
        this.db = mongoose.connection;
        this.db.once('open', () => console.log('DB connected'));

        mongoose.connection.on('error', () => {
            console.log('Connection error. Please make sure MongoDB is running.')
            process.exit();
        })
    }

    /* add routes to the application. */
    public addRoute(routeURL: string, routeHandler: express.Router): void {
        if(this.routes.indexOf(routeHandler) === -1){
            this.routes.push();
            this.app.use(routeURL,routeHandler);
        }
    }


    public start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server running on port: ${this.port} - ${this.mode} mode.`);
        })
    }

}