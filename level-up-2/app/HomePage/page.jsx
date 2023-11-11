'use client'

import React, { useState , useEffect} from 'react';
import TaskCard from 'components/TaskCard';
import ProgressionBar from 'components/ProgressionBar';

const tasksFromLS = JSON.parse(localStorage.getItem('tasks')|| '[]');

export default function Home() {
  const [tasks, setTasks] = useState([ ...tasksFromLS]);

 
  // Update Local Storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Tasks have been updated', tasks);
  }, [tasks]);

  // useEffect(() => {console.log('Task has been changed', tasks);}, [tasks])

  const fetchTask = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tasks');
      const data = await response.json();
      console.log('data', data);
      if (data && data.task) {
        const newTasks = data.task.filter(nt => !tasks.some(t => t._id === nt._id));

        setTasks(currentTasks => [...currentTasks, ...newTasks]) 
        console.log('tasks', data.task);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (
    <main>
      <ProgressionBar totalTasks={tasks.length} completedTasks={tasks.filter(task => task.completed).length} />
      <button onClick={fetchTask}>+ Add Task</button>
      <TaskCard tasks={tasks} setTasks={setTasks} />
    </main>
  );
}
