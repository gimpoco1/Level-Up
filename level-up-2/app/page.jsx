'use client'

import React, { useState } from 'react';
import TaskCard from 'components/TaskCard';
import ProgressionBar from 'components/ProgressionBar';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tasks');
      const data = await response.json();
      if (data && data.tasks) {
        setTasks([...tasks, ...data.tasks]); 
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (
    <main>
      <ProgressionBar totalTasks={tasks.length} completedTasks={tasks.filter(task => task.completed).length} />
      <button onClick={fetchTask}>+ Add Task</button>
      {tasks.map(task => <TaskCard key={task._id} task={task} />)}
    </main>
  );
}
