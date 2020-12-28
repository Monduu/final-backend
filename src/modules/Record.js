import mongoose from 'mongoose';

const RecordSchema = mongoose.Schema({
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

const record = mongoose.model('guestbook_records', RecordSchema);

export default record;