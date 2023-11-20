'use client'
import React, { useState, useEffect } from 'react';
import TaskDetail from 'components/TaskDetail';

export default function Profile() {
    const [completedTasks, setCompletedTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    const showTaskDetails = (task) => {
        setSelectedTask(task);
    };

    const closeTaskDetails = () => {
        setSelectedTask(null);
    };


    useEffect(() => {
        const fetchCompletedTasks = async () => {
            try {
                const response = await fetch('/api/tasks/completed');
                if (response.ok) {
                    const data = await response.json();
                    setCompletedTasks(data.completedTasks); 
                } else {
                    throw new Error('Failed to fetch completed tasks');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCompletedTasks();
    }, []);

    const achievementMessage = () => {
        const count = completedTasks.length;
        if (count > 20) {
            return "🌟 Master 🌟";
        } else if (count > 15) {
            return "Advanced ⭐";
        } else if (count > 10) {
            return "Pro 🏆";
        } else if (count >= 5) {
            return "Amateur 🚀";
        } else if (count > 0) {
            return "Rookie 🌱";
        } else {
            return "🎯 Set your first task! 🎯";
        }
    };

    return (
        <main >
            <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-2xl mx-auto mt-4">
                <h2 className="text-3xl font-bold text-gray-700 mb-4">Your Progress</h2>
                <p className="text-xl text-gray-600 mb-8">
                    You have completed 
                    <span className="text-2xl font-bold text-green-600 mx-2">{completedTasks.length}</span>
                    {completedTasks.length === 1 ? 'task' : 'tasks'}.
                </p>
                <p className="text-lg font-semibold text-orange-700 py-3 px-6 rounded-lg bg-gradient-to-r from-pink-300 via-orange-300  inline-block  ">
                {achievementMessage()}
                </p>

                <div className="mt-6">
  {completedTasks.length > 0 && (
    <>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Completed Tasks:</h3>
      <ul className="list-disc list-inside text-left pt-5">
        {completedTasks.map(task => (
          <li key={task._id} className="mb-2 text-gray-600">
            <button onClick={() => showTaskDetails(task)} className="hover:text-orange-500 text-left">
              {task.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  )}
</div>
            </div>
            {selectedTask && <TaskDetail task={selectedTask} onClose={closeTaskDetails} showImage={true}/>}

        </main>
    );
}
