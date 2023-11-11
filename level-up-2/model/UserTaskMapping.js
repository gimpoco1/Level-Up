import mongoose from 'mongoose';
import MockUser from './User';

const userTaskMappingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'MockUser' 
    },
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Task'
    }
}, {
    timestamps: true 
});

const UserTaskMapping = mongoose.models.UserTaskMapping || mongoose.model('UserTaskMapping', userTaskMappingSchema);

export default UserTaskMapping;