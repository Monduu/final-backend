import express from 'express';
import Record from '../modules/Record.js';

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const query = Record.find({});
        const records = await query.exec();
        res.json(records);
    } catch (err) {
        res.json({
            message: 'Something went wrong'
        });
    }
});



router.post('/', async (req, res) => {
    const record = new Record({
        author: req.body.author,
        description: req.body.description,
    });

    try {
        const data = await record.save();
        res.json(data);
    } catch (err) {
        res.json({
            message: err
        });
    }

});



export default router;