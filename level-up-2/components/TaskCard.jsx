'use client';
import React from 'react';

export default function TaskCard({ tasks, setTasks }) {

  const onDelete = async (taskId) => {
    // Logic for handling delete
    setTasks(currentTasks => currentTasks.filter(task => task._id !== taskId));
  };

  const onToggleComplete = async (taskId, completed) => {
    // Logic for handling toggle complete
    await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newCompleted: !completed }),
    });
    setTasks(currentTasks => currentTasks.map(task => task._id === taskId ? { ...task, completed: !completed } : task));
  };

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {Array.isArray(tasks) && tasks.map(task => (
      <div key={task._id} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden my-4 mx-2">
      <img className="w-full h-48 object-cover" src={task.image} alt={task.title} />
      <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">{task.title}</h3>
          <p className="text-gray-600 text-sm">{task.description}</p>
          <div className="flex justify-between items-center mt-4">
              <button 
                  onClick={() => onToggleComplete(task._id, task.completed)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${task.completed ? 'bg-green-500 text-white' : 'bg-yellow-500 text-gray-800'} hover:bg-opacity-90`}
                  title={task.completed ? 'Task Completed' : 'Mark it as complete'}
              >
                  {task.completed ? 'Completed' : 'In Progress'}
              </button>
              <button 
                  onClick={() => onDelete(task._id)}
                  className="text-red-500 hover:text-red-600 transition-colors duration-300"
                  title="Are you sure?"
              >
              
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

              </button>
          </div>
      </div>
  </div>
  
  
   
      ))}
      </div>
    </>
  );
}
