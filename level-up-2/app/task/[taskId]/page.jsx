'use client'
import React, { useState, useEffect } from 'react';
import TaskDetail from 'components/TaskDetail';

const DescriptionPage = ({task}) => {
  const tasksFromLS = JSON.parse(localStorage.getItem('tasks') || '[]');
  const [tasks, setTasks] = useState([...tasksFromLS]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <TaskDetail task={task} setTasks={setTasks}/>
    </div>
  );
};

export default DescriptionPage;
