import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import recordRoutes from './routes/records.js';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
// console.log(process.env);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/guestbook-records', recordRoutes);

mongoose.connect(
    process.env.MONGOOSE_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log('there was en error', err);
        } else {
            console.log('connection succesfull');
        }

    }

);

app.listen(process.env.PORT);