import express from 'express';
import Task from '../modules/Task.js';

const router = express.Router();

// GET /tasks
router.get('/', async (req, res) => {


    try {
        const query = Task.find({});
        const tasks = await query.exec();   
        res.json(tasks);
    } catch (err) {
        res.json({
            message: 'Something went wrong'
        });
    }
});

// POST /task/create
// {
//     "title": "foo",
//     "labels": []
// }
router.post('/', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        labels: req.body.labels,
    });

    try {
        const data = await task.save();
        res.json(data);
    } catch (err) {
        res.json({
            message: err
        });
    }

});

// task.save()
//     .then((data) => {
//         res.json(data);
//     })
//     .catch((err) => {
//         res.json({
//             message: err
//         });
//     });

// GET/task/123123
router.get('/:taskId', async (req, res) => {
    try {
        const query = Task.findById(req.params.taskId);
        const task = await query.exec();
        res.json(task);
    } catch (err) {
        res.json({
            message: 'Something went wrong'
        });
    }
});

// PATCH/tasks/1341231 
// {
//     "title": foo,
//     "labels": [],
//     "description": 'some text'
// }
router.patch('/:taskId', async (req, res) => {
    try {
        const query = Task.findById(req.params.taskId);
        const task = await query.exec();

        console.log(req.body);

        task.title = req.body.title;
        task.description = req.body.description;
        task.labels = req.body.labels;

        await task.save();

        res.json(task);
    } catch (err) {
        console.log(err);
        res.json({
            message: 'Something went wrong'
        });
    }
});

// DELETE/task/1231412 
router.delete('/:taskId', async (req, res) => {
    try {
        const query = Task.deleteOne({
            _id: req.params.taskId
        });
        const task = await query.exec();
        res.json('Task deleted');
    } catch (err) {
        res.json({
            message: 'Something went wrong'
        });
    }
});

// PATCH / task/comleted/32413
// {
//     "isCompleted": true
// }
router.patch('/completed/:taskId', async (req, res) => {
    try {
        const query = Task.findById(req.params.taskId);
        const task = await query.exec();

        task.isCompleted = req.body.isCompleted;

        await task.save();

        res.json(task);
    } catch (err) {
        res.json({
            message: 'Something went wrong'
        });
    }
});


export default router;