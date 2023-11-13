import mongoose, {Schema} from 'mongoose';

const taskSchema = new Schema({
  title: String,
  description: String,
  image: String,
  completed: { type: Boolean, default: false },
  more: String,
});

const Task = mongoose.models.Task ||  mongoose.model('Task', taskSchema);
export default Task;