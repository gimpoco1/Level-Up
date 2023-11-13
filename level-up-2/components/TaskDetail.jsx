'use client'
import React, { useState, useEffect } from 'react';
import TaskCard from 'components/TaskCard';

const TaskDetail = ({task}) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{task.title} Hello there</h1>
      <TaskCard  tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskDetail;
