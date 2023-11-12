export default function ProgressionBar({ totalTasks, completedTasks }) {
    const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return (
        <div className="w-3/4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden">
            <div className="bg-yellow-500 text-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full transition-all duration-700 ease-in-out" 
                 style={{ width: `${completionPercentage}%` }}>
                {completionPercentage.toFixed(0)}%
            </div>
        </div>
    );
}
