export default function ProgressionBar({ totalTasks, completedTasks }) {
    const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    let barColorClass;
    if (completionPercentage === 0) {
        barColorClass = ''; 
    } else if (completionPercentage < 30) {
        barColorClass = 'bg-gradient-to-r from-red-500 to-red-700'; 
    } else if (completionPercentage < 50) {
        barColorClass = 'bg-gradient-to-r from-orange-500 to-orange-700';
    } else if (completionPercentage < 70) {
        barColorClass = 'bg-gradient-to-r from-yellow-500 to-yellow-700'; 
    } else if (completionPercentage < 100) {
        barColorClass = 'bg-gradient-to-r from-lime-500 to-lime-700'; 
    } else {
        barColorClass = 'bg-gradient-to-r from-green-500 to-green-700'; 
    }

    return (
        <div className="relative w-3/4 mx-auto ">
            <span className="absolute -top-6 left-0 text-gray-700 text-sm font-semibold">Progress</span>
            <div className="bg-gray-200 rounded-full overflow-hidden shadow">
                <div className={`transition-all duration-1000 ease-in-out ${barColorClass} text-white text-sm font-semibold text-center p-1 leading-none rounded-full`}
                     style={{ width: `${completionPercentage}%` }}>
                    {completionPercentage.toFixed(0)}%
                </div>
            </div>
        </div>
    );
}
