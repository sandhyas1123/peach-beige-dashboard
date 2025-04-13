
import React, { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Clock, Star, CheckCircle, AlertCircle, Users, PauseCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  deadline: Date;
  status: "Completed" | "In Progress" | "On Hold" | "Not Started";
  completion: number;
  teamMembers: TeamMember[];
  project: string;
}

interface TaskCardProps {
  task: Task;
  onClick: (task: Task) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-amber-100 text-amber-700";
      case "Low":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
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

  const getStatusIcon = (status: Task["status"]) => {
    switch (status) {
      case "Completed":
        return <CheckCircle size={18} className="text-green-600" />;
      case "In Progress":
        return <Clock size={18} className="text-blue-600" />;
      case "On Hold":
        return <PauseCircle size={18} className="text-amber-600" />;
      case "Not Started":
        return <AlertCircle size={18} className="text-gray-600" />;
      default:
        return <AlertCircle size={18} className="text-gray-600" />;
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
          size={16}
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
    <div 
      className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-4px] cursor-pointer"
      onClick={() => onClick(task)}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-purple-dark">{task.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm truncate-2-lines mb-4">
          {task.description}
        </p>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-1.5">
            {getStatusIcon(task.status)}
            <span className={`text-sm font-medium ${getStatusColor(task.status)}`}>
              {task.status}
            </span>
          </div>
          
          <div className="flex items-center">
            {getRatingStars()}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center gap-1">
            <Clock size={15} className="text-gray-500" />
            <span className="text-gray-500">
              {task.deadline.toLocaleDateString()}
            </span>
          </div>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex items-center gap-1 cursor-pointer">
                <Users size={15} className="text-gray-500" />
                <span className="text-gray-500">{task.teamMembers.length} members</span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-64 p-3">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Team Members</h4>
                <div className="grid grid-cols-1 gap-2">
                  {task.teamMembers.map(member => (
                    <div key={member.id} className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback className="text-xs bg-green-100 text-green-800">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs">{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
