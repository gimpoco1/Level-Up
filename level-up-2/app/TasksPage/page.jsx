'use client'
import { useEffect, useState } from "react"
import TaskCard from "components/TaskCard"

const getTasks = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/tasks', {
        cache: 'no-store',
      });
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      console.error('Error loading tasks', error);
    }
  };

export default function TasksPage() {
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const onDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  const onToggleComplete = async (id) => {
    try {
      const task = tasks.find((task) => task._id === id);
      const newCompleted = { ...task, completed: !task.completed };
      const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: newCompleted.completed }),
      });
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      setTasks(
        tasks.map((task) => (task._id === id ? newCompleted : task))
      );
    } catch (error) {
      console.error('Error updating task', error);
    }
    console.log('task', task);
  };

  return (
    <div className="container mx-auto p-4">
          {Array.isArray(tasks) && tasks.map((task) => (  
          task && <TaskCard
          key={task._id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />

      ))}
    </div>
  );
}

