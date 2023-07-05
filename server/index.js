import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './route.js';
import Connection from './database/Db.js'

const app = express();


app.use(cors());
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', Routes);


const PORT = process.env.PORT ||'8080';

Connection();

 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));