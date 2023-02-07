import express from 'express';
const app = express();
import { router } from './routes/index'
 
const port = 3333;

app.use('/', router)

app.listen(port, () => {
    console.log(`Server is in ${port}`);
})   

this is new