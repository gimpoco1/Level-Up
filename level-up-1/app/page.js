import { useEffect, useState } from 'react';
import TaskCard from '../components/TaskCard'

const Home= () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/api/tasks') 
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const deleteTask = (id) => {
    fetch(`/api/tasks/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  const toggleTaskCompletion = (id) => {
    const task = tasks.find(task => task._id === id);
    fetch(`/api/tasks/${id}`, { 
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !task.completed }),
    })
      .then(response => response.json())
      .then(updatedTask => {
        setTasks(tasks.map(task => task._id === id ? updatedTask : task));
      })
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map(task => (
          <TaskCard 
            key={task._id} 
            task={task} 
            onDelete={deleteTask} 
            onToggleComplete={toggleTaskCompletion} 
          />
        ))}
      </div>
    </div>
  );
}
export default Home;