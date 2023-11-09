export default function TaskCard({ task, onDelete, onToggleComplete }) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-2">
        <img className="w-full" src={task.image} alt={task.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{task.title}</div>
          <p className="text-gray-700 text-base">
            {task.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button 
            onClick={() => onToggleComplete(task._id)} 
            className={`inline-block bg-${task.completed ? 'green' : 'gray'}-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            {task.completed ? 'Completed' : 'Mark as Complete'}
          </button>
          <button 
            onClick={() => onDelete(task._id)} 
            className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  