import React from 'react';

const TaskCard = ({ task, onDelete, onFavorite }) => {
 
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Difficulty: {task.difficulty}</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onFavorite}>Favorite</button>
    </div>
  );
};

export default TaskCard;
