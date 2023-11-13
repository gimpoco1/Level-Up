'use client';

import TaskCard from './TaskCard';

const TaskDetail = ({ tasks, setTasks }) => {
  // Use TaskCard component in detail view mode
  return <TaskCard tasks={tasks} setTasks={setTasks}  />;
};

export default TaskDetail;
