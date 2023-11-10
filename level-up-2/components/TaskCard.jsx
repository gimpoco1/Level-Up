'use client';
import React, { useState, useEffect } from 'react';

const getTasks = async () => {  
  try {
    const res = await fetch('http://localhost:3000/api/tasks', {
      cache: 'no-store'
    });
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    return data.tasks;
  } catch (error) {
    console.log('Error loading tasks', error);
    return []; 
  }
};

export default function TaskCard() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);
  

 const onDelete = async (taskId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    setTasks(tasks.filter(task => task._id !== taskId));
  } catch (error) {
    console.log('Failed to delete task:', error);
  }
};

  const onToggleComplete = async (taskId, completed) => {
    await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newCompleted: !completed }),
    });
    setTasks(tasks.map(task => task._id === taskId ? { ...task, completed: !completed } : task));
  };

  return (
    <>
      {tasks.map(task => (
        <div key={task._id} className="max-w-sm rounded overflow-hidden shadow-lg my-2">
          <img className="w-full" src={task.image} alt={task.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{task.title}</div>
            <p className="text-gray-700 text-base">
              {task.description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button 
              onClick={() => onToggleComplete(task._id, task.completed)} 
              className={`inline-block bg-${task.completed ? 'green' : 'gray'}-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
            >
              {task.completed ? 'Completed' : 'Mark as Complete'}
            </button>
            <button 
              onClick={() => onDelete(task._id)} 
              className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
