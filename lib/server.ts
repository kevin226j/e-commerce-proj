import App from './app'
import ContactRoute from './routes/Contact'


//initialize port, default to 3000
const port: number = parseInt(<string>process.env.PORT, 10)|| 3000; 
const app = new App(port);

//initialize routing handlers here:
const contacts = new ContactRoute();

//add handlers to accompanying routes
app.addRoute('/contact', contacts.router);

//start app server
app.start();
