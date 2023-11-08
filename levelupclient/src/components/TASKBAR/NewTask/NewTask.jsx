import React from 'react';

const NewTask = ({ onGenerateNewTask }) => {
  const handleGenerateTask = () => {
    fetch('http://localhost:5000/tasks/generate')
      .then(response => response.json())
      .then(newTask => {
        onGenerateNewTask(newTask);
      })
      .catch(error => {
        console.error('Error generating task:', error);
      });
  };

  return (
    <button onClick={handleGenerateTask}>+</button>
  );
};

export default NewTask;

