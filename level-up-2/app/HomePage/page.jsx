'use client'

import React, { useState, useEffect } from 'react';
import TaskCard from 'components/TaskCard';
import ProgressionBar from 'components/ProgressionBar';

export default function Home() {
  const tasksFromLS = JSON.parse(localStorage.getItem('tasks') || '[]');
  const [tasks, setTasks] = useState([...tasksFromLS]);

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const fetchTask = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tasks');
      const data = await response.json();
      if (data && data.task) {
        const newTasks = [...data.task, ...tasks.filter(t => !data.task.some(nt => nt._id === t._id))];
        setTasks(newTasks);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };


  
  return (
  <main className=" pb-16">
    <div className="pt-5" >
      <ProgressionBar totalTasks={tasks.length} completedTasks={tasks.filter(task => task.completed).length} />
      </div>
      <div className="container mx-auto px-4">
        <TaskCard tasks={tasks} setTasks={setTasks} />
      </div>

      <div className="fixed bottom-4 left-4">
       <button onClick={fetchTask} className="bg-red-300 text-gray-800 text-white p-4 rounded-full shadow-lg animate-pulse">
         <svg className="h-6 w-6" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
         </svg>
      </button>
     </div>
   </main>
  );
}
