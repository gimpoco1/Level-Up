// pages/task/[taskId].js
import React from 'react';

const TaskDetail = ({ task }) => {
  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <img src={task.image} alt={task.title} style={{ maxWidth: '100%' }} />
      <p>{task.description}</p>
      {/* Additional task details */}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`http://localhost:3000/api/tasks/${params.taskId}`);
    const task = await res.json();

    return {
      props: { task }, // will be passed to the page component as props
    };
  } catch (err) {
    return { props: { task: null } };
  }
}

export default TaskDetail;
