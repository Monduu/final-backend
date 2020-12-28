import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const task = mongoose.model('guestbook_records', TaskSchema);

export default task;