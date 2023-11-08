import React, { useState, useEffect } from 'react';
import TaskCard from '../../TASKLIST/TaskCard';

const FavoriteTasks = () => {
  const [favoriteTasks, setFavoriteTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(response => response.json())
      .then(data => setFavoriteTasks(data))
      .catch(error => console.error('Error fetching favorite tasks:', error));
  }, []);

  const handleDeleteTask = (taskId) => {
    fetch(`http://localhost:5000/tasks/:id`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Task deleted successfully') {
          setFavoriteTasks(favoriteTasks.filter(task => task._id !== taskId));
        }
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div>
      <h2>Favorite Tasks</h2>
      {favoriteTasks.map(task => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={() => handleDeleteTask(task._id)}
        />
      ))}
    </div>
  );
};

export default FavoriteTasks;