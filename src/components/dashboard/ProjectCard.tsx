
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";
import { format } from "date-fns";

export interface Project {
  id: string;
  title: string;
  description: string;
  status: "In Progress" | "Completed" | "On Hold";
  deadline: Date;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const getStatusColor = (status: Project["status"]) => {
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
    <div className="bg-white rounded-lg overflow-hidden card-shadow">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-purple-dark">{project.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        
        <div className={`overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-60" : "max-h-12"
        }`}>
          <p className={`text-gray-600 text-sm ${expanded ? "" : "truncate-2-lines"}`}>
            {project.description}
          </p>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={16} className="mr-1" />
            <span>{format(project.deadline, "MMM d, yyyy")}</span>
          </div>
          
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm flex items-center text-peach-dark hover:text-peach transition-colors"
          >
            {expanded ? (
              <>
                <span className="mr-1">Read Less</span> 
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span className="mr-1">Read More</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
