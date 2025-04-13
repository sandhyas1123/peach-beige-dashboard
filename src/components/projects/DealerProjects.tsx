
import React, { useState } from "react";
import { Building2, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectDetails } from "./ProjectDetail";
import ProjectDetail from "./ProjectDetail";

interface DealerProjectsProps {
  dealers: {
    id: string;
    name: string;
    cover: string;
    projectCount: number;
    projects: ProjectDetails[];
  }[];
}

const DealerProjects: React.FC<DealerProjectsProps> = ({ dealers }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  return (
    <div>
      <h2 className="text-xl font-semibold text-purple-dark mb-4">Key Dealers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {dealers.map((dealer) => (
          <Card key={dealer.id} className="overflow-hidden transition-all hover:shadow-lg hover:translate-y-[-4px] group border border-green-100">
            <div className="h-40 overflow-hidden">
              <img 
                src={dealer.cover} 
                alt={dealer.name} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="mr-2 text-green-600" size={18} />
                {dealer.name}
              </CardTitle>
              <CardDescription>{dealer.projectCount} Projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {dealer.projects.slice(0, 2).map((project) => (
                  <div 
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="flex justify-between items-center p-2 rounded-md hover:bg-beige-light cursor-pointer transition-colors"
                  >
                    <span className="text-sm font-medium">{project.title}</span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                ))}
                {dealer.projects.length > 2 && (
                  <p className="text-xs text-center text-green-600 mt-2">
                    +{dealer.projects.length - 2} more projects
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
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

export default DealerProjects;
