
import React, { useState } from "react";
import { Task } from "./TaskCard";
import { PauseCircle, ChevronDown, ChevronUp } from "lucide-react";
import TaskDetail from "./TaskDetail";

interface OnHoldTasksProps {
  tasks: Task[];
}

const OnHoldTasks: React.FC<OnHoldTasksProps> = ({ tasks }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  if (tasks.length === 0) return null;

  return (
    <div className="mb-8">
      <button 
        className="flex items-center justify-between w-full bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-lg mb-4 hover:bg-amber-100 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          <PauseCircle className="mr-2" size={20} />
          <span className="font-medium">On Hold Tasks ({tasks.length})</span>
        </div>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {expanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {tasks.map(task => (
            <div 
              key={task.id}
              className="bg-white border border-amber-100 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setSelectedTask(task)}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-purple-dark">{task.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full font-medium bg-amber-100 text-amber-700">On Hold</span>
                </div>
                
                <p className="text-gray-600 text-sm truncate-2-lines mb-4">
                  {task.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Project: {task.project}</span>
                  <span className="text-sm text-gray-500">{task.deadline.toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedTask && (
        <TaskDetail 
          task={selectedTask} 
          onClose={() => setSelectedTask(null)} 
        />
      )}
    </div>
  );
};

export default OnHoldTasks;
