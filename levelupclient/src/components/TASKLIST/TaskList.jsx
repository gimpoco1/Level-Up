import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import NewTask from '../TASKBAR/NewTask/NewTask';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleGenerateNewTask = (newTask) => {
    fetch('http://localhost:5000/tasks/generate')
    .then(response => response.json())
    .then(newTask => {
      setTasks(prevTasks => [...prevTasks, newTask]);
    })
    .catch(error => console.error('Error generating new task:', error));
};

  const handleDeleteTask = (taskId) => {
    fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Task deleted successfully') {
          setTasks(tasks.filter(task => task._id !== taskId));
        }
      })
      .catch(error => console.error('Error deleting task:', error));
  };
  const handleFavoriteTask = (taskId) => {
    fetch(`http://localhost:5000/tasks/favorite/${taskId}`, {
      method: 'PUT',
    })
      .then(response => response.json())
      .then(data => {
        setTasks(tasks.map(task => task._id === taskId ? { ...task, favorite: true } : task));
      })
      .catch(error => console.error('Error marking task as favorite:', error));
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map(task => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={() => handleDeleteTask(task._id)}
          onFavorite={() => handleFavoriteTask(task._id)}
        />
      ))}
    <NewTask onGenerateNewTask={handleGenerateNewTask} />
    </div>
  );
};

export default TaskList;
