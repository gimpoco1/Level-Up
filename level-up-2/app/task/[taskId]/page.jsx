'use client';
import React, { useState, useEffect } from 'react';
import TaskDetail from 'components/TaskDetail';
import { useSearchParams } from 'next/navigation';

const DescriptionPage = () => {
  const searchParams = useSearchParams();

  const id = searchParams.get('taskId');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
 
  console.log('id', id);

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/tasks/${id}`);
        const data = await response.json();
        if (data && data.task) {
          setTask(data.task);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }), [id];


  return <TaskDetail tasks={task} setTasks={setTasks} />;
};

export default DescriptionPage;
