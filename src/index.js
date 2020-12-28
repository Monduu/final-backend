import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import taskRoutes from './routes/tasks.js';
// import labelRoutes from './routes/labels.js';
// import commentsRoutes from './routes/comments.js';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
// console.log(process.env);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/tasks', taskRoutes);
// app.use('/labels', labelRoutes);
// app.use('/comments', commentsRoutes);

app.get('/', (req, res) => {
    res.send('Yeey , from express');
});

app.get('/tasks', (req, res) => {
    res.send('This is tasks page');
});



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