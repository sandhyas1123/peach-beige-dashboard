
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Calendar, Award } from "lucide-react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface ProjectDetails {
  id: string;
  title: string;
  client: string;
  description: string;
  status: "Completed" | "In Progress" | "On Hold";
  completionPercentage: number;
  startDate: Date;
  endDate?: Date;
  timeToComplete?: string;
  dealerCover?: string;
  teamMembers: TeamMember[];
  isPrime?: boolean;
}

interface ProjectDetailProps {
  project: ProjectDetails;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl animate-fade-in">
        <div className="relative">
          {project.dealerCover && (
            <div className="h-48 overflow-hidden rounded-t-xl">
              <img 
                src={project.dealerCover} 
                alt={`${project.client} cover`} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-purple-dark">{project.title}</h2>
              <p className="text-gray-500">Client: {project.client}</p>
            </div>
            {project.isPrime && (
              <div className="flex items-center bg-amber-100 px-3 py-1 rounded-full">
                <Award className="text-amber-600 mr-1" size={16} />
                <span className="text-amber-700 text-sm font-medium">Prime Project</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-700 mb-6">{project.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-beige-light rounded-lg p-4">
              <h3 className="font-medium text-purple-dark mb-3 flex items-center">
                <Clock size={18} className="mr-2" /> Timeline
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Date:</span>
                  <span className="font-medium">{project.startDate.toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">End Date:</span>
                  <span className="font-medium">
                    {project.endDate ? project.endDate.toLocaleDateString() : 'Ongoing'}
                  </span>
                </div>
                {project.timeToComplete && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time to Complete:</span>
                    <span className="font-medium">{project.timeToComplete}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-beige-light rounded-lg p-4">
              <h3 className="font-medium text-purple-dark mb-3 flex items-center">
                <Users size={18} className="mr-2" /> Team & Progress
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium ${
                    project.status === "Completed" ? "text-green-600" : 
                    project.status === "On Hold" ? "text-amber-600" : "text-blue-600"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completion:</span>
                    <span className="font-medium">{project.completionPercentage}%</span>
                  </div>
                  <Progress value={project.completionPercentage} className="h-2" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium text-purple-dark mb-4">Team Members</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.teamMembers.map(member => (
                <div key={member.id} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
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

export default ProjectDetail;
