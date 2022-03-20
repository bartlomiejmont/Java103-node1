import express, {Request, Response} from 'express';
import {data} from './data';

const app = express();
app.set('view engine', 'ejs');
////////////////////////////////

app.get('/', (req:Request, res:Response) => {
    res.render('home', {data});
})


////////////////////////////////
app.listen(3000);


// http://{url}/{path}
// http://localhost:3000/hello