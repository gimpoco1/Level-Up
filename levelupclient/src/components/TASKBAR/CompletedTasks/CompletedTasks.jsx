import React, { useState, useEffect } from 'react';
import TaskCard from '../../TASKLIST/TaskCard';

const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks/completed')
      .then(response => response.json())
      .then(data => setCompletedTasks(data))
      .catch(error => console.error('Error fetching completed tasks:', error));
  }, []);

  const handleDeleteTask = (taskId) => {
    fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Task deleted successfully') {
          setCompletedTasks(completedTasks.filter(task => task._id !== taskId));
        }
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div>
      <h2>Completed Tasks</h2>
      {completedTasks.map(task => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={() => handleDeleteTask(task._id)}
        />
      ))}
    </div>
  );
};

export default CompletedTasks;