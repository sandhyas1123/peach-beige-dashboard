
import React, { useState } from "react";
import TaskCard, { Task } from "./TaskCard";
import TaskDetail from "./TaskDetail";

interface TasksSectionProps {
  title: string;
  description: string;
  tasks: Task[];
  icon?: React.ReactNode;
}

const TasksSection: React.FC<TasksSectionProps> = ({ title, description, tasks, icon }) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        {icon && <div className="mr-2">{icon}</div>}
        <div>
          <h2 className="text-xl font-semibold text-purple-dark">{title}</h2>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onClick={setSelectedTask}
          />
        ))}
      </div>

      {selectedTask && (
        <TaskDetail 
          task={selectedTask} 
          onClose={() => setSelectedTask(null)} 
        />
      )}
    </div>
  );
};

export default TasksSection;
