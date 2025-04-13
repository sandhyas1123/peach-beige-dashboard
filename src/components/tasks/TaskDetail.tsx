
import React from "react";
import { Task } from "./TaskCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, CheckCircle, Clock, Star, AlertCircle, PauseCircle, Briefcase } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface TaskDetailProps {
  task: Task;
  onClose: () => void;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ task, onClose }) => {
  const getStatusIcon = (status: Task["status"]) => {
    switch (status) {
      case "Completed":
        return <CheckCircle size={20} className="text-green-600" />;
      case "In Progress":
        return <Clock size={20} className="text-blue-600" />;
      case "On Hold":
        return <PauseCircle size={20} className="text-amber-600" />;
      case "Not Started":
        return <AlertCircle size={20} className="text-gray-600" />;
      default:
        return <AlertCircle size={20} className="text-gray-600" />;
    }
  };

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "Completed":
        return "text-green-600";
      case "In Progress":
        return "text-blue-600";
      case "On Hold":
        return "text-amber-600";
      case "Not Started":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  const getRatingStars = () => {
    const totalStars = 5;
    const filledStars = task.status === "Completed" ? 5 :
                      task.status === "In Progress" ? 3 :
                      task.status === "On Hold" ? 2 : 1;
    
    return Array(totalStars)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          size={20}
          className={
            index < filledStars
              ? task.status === "On Hold"
                ? "text-amber-400 fill-amber-400"
                : "text-green-500 fill-green-500"
              : "text-gray-300"
          }
        />
      ));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl animate-fade-in">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-semibold text-purple-dark">{task.title}</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700">{task.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-beige-light rounded-lg p-4">
              <h3 className="font-medium text-purple-dark mb-3">Task Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Briefcase size={16} /> Project:
                  </span>
                  <span className="font-medium">{task.project}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-2">
                    <CalendarDays size={16} /> Deadline:
                  </span>
                  <span className="font-medium">{task.deadline.toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Priority:</span>
                  <span className={`font-medium px-2 py-0.5 rounded-full text-xs ${
                    task.priority === "High" ? "bg-red-100 text-red-700" :
                    task.priority === "Medium" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"
                  }`}>
                    {task.priority}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-beige-light rounded-lg p-4">
              <h3 className="font-medium text-purple-dark mb-3">Status & Progress</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium flex items-center gap-1.5 ${getStatusColor(task.status)}`}>
                    {getStatusIcon(task.status)} {task.status}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completion:</span>
                    <span className="font-medium">{task.completion}%</span>
                  </div>
                  <Progress value={task.completion} className="h-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating:</span>
                  <div className="flex">{getRatingStars()}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-lg p-4 mb-4">
            <h3 className="font-medium text-purple-dark mb-4">Team Members ({task.teamMembers.length})</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {task.teamMembers.map(member => (
                <div key={member.id} className="flex items-center gap-3 p-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-green-100 text-green-800">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-purple-dark text-sm">{member.name}</p>
                    <p className="text-gray-500 text-xs">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
