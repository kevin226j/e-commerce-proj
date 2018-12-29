import app from './app'
import * as https from 'https';
import * as fs from 'fs'

const {PORT = 3000} = process.env

const httpsOptions = {
    key: fs.readFileSync('./config/key.pem', 'utf8'),
    cert: fs.readFileSync('./config/server.crt', 'utf8')
}

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`)
})

/* For testing with https */
/*
https.createServer(httpsOptions, app).listen(PORT, ()=>{
     console.log(`Server listening on port: ${PORT}`)
})
*/