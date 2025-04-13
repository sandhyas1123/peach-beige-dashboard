
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { ProjectDetails } from "./ProjectDetail";
import ProjectDetail from "./ProjectDetail";

interface CurrentProjectsProps {
  projects: ProjectDetails[];
}

const CurrentProjects: React.FC<CurrentProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  const getStatusColor = (status: ProjectDetails["status"]) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      case "On Hold":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-purple-dark mb-4">Current Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-white rounded-lg overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px] cursor-pointer border border-green-50"
          >
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-purple-dark">{project.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm truncate-2-lines mb-4">
                {project.description}
              </p>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Completion</span>
                  <span className="font-medium">{project.completionPercentage}%</span>
                </div>
                <Progress 
                  value={project.completionPercentage} 
                  className={`h-2 ${
                    project.completionPercentage >= 75 ? 'bg-green-200' : 
                    project.completionPercentage >= 50 ? 'bg-blue-200' : 'bg-amber-200'
                  }`}
                />
              </div>
              
              <div className="flex items-center mt-4 text-sm text-gray-500">
                <div className="flex -space-x-2 mr-2">
                  {project.teamMembers.slice(0, 3).map((member, index) => (
                    <div 
                      key={index} 
                      className="w-6 h-6 rounded-full bg-beige-light border border-white flex items-center justify-center text-xs font-medium text-green-800"
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  ))}
                  {project.teamMembers.length > 3 && (
                    <div className="w-6 h-6 rounded-full bg-beige-light border border-white flex items-center justify-center text-xs font-medium text-green-800">
                      +{project.teamMembers.length - 3}
                    </div>
                  )}
                </div>
                <span>Team: {project.teamMembers.length} members</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default CurrentProjects;
