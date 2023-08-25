import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Routes from './Component/Routes/Routes.js';
// import { log } from 'console';


const app = express();

app.use(Routes)

app.use(bodyParser.json());

app.listen(8000,()=>{
    console.log(`app listen at ${8000}`);
})

mongoose.connect(`mongodb+srv://vetrivel:backend@cluster0.fvqqwvp.mongodb.net/`).then(()=>{
    console.log("DB Connected");
})
.catch((e)=>console.log("Error : ",e));

// backend
