'use client'

import React, { useState, useEffect } from 'react';


export default function Profile() {
    const [completedTasksCount, setCompletedTasksCount] = useState(null);

    useEffect(() => {
        const fetchCompletedCount = async () => {
            try {
                const response = await fetch('/api/tasks/completedCount');
                if (response.ok) {
                    const data = await response.json();
                    setCompletedTasksCount(data.completedCount);
                } else {
                    throw new Error('Failed to fetch completed tasks count');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCompletedCount();
    }, []);

    if (completedTasksCount === null) {
        return <div>Loading...</div>;  // Placeholder content
    }

    const achievementMessage = () => {
        if (completedTasksCount > 10) {
            return "🌟 Amazing work! Keep it up! 🌟";
        } else if (completedTasksCount >= 5) {
            return "✨ Great job! You're on a roll! ✨";
        } else if (completedTasksCount > 0) {
            return "🚀 Off to a good start! 🚀";
        } else {
            return "🎯 Set and complete your tasks to see them here! 🎯";
        }
    };

    return(
        <main className="pt-14"> 
        <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md mx-auto mt-4">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Your Progress</h2>
            <p className="text-xl text-gray-600 mb-8">
                You have completed 
                <span className="text-2xl font-bold text-green-600 mx-2">{completedTasksCount}</span>
                {completedTasksCount === 1 ? 'task' : 'tasks'}.
            </p>
            <p className="text-lg font-semibold text-green-700 py-2 px-4 rounded-lg bg-green-100 inline-block shadow ">
                {achievementMessage()}
            </p>
        </div>
    </main>
    )
}
