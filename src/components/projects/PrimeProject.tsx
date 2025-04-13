
import React, { useState } from "react";
import { Award, Calendar, Clock, Check } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectDetails } from "@/types/projects";
import ProjectDetail from "./ProjectDetail";

interface PrimeProjectProps {
  project: ProjectDetails;
}

const PrimeProject: React.FC<PrimeProjectProps> = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);
  
  // Calculate time to complete
  const timeToComplete = project.endDate && project.startDate
    ? `${Math.round((project.endDate.getTime() - project.startDate.getTime()) / (1000 * 60 * 60 * 24))} days`
    : "Not specified";

  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-purple-dark mb-4">Prime Project</h2>
        <Card className="overflow-hidden bg-gradient-to-r from-green-50 to-beige-light border-green-100 hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => setShowDetail(true)}>
          <div className="h-48 overflow-hidden relative">
            <img 
              src={project.dealerCover}
              alt="Prime Project" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="outline" className="bg-amber-100 text-amber-800 flex items-center gap-1 px-3 py-1">
                <Award size={14} className="text-amber-600" />
                Prime Project
              </Badge>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-xl font-semibold">{project.title}</h3>
              <p className="text-white/80">Client: {project.client}</p>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-green-100 p-2 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-purple-dark">Completed Successfully</h4>
                  <p className="text-gray-500 text-sm">Project delivered on time and as specified</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-100 p-2 flex-shrink-0">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-purple-dark">Time to Complete</h4>
                  <p className="text-gray-500 text-sm">{timeToComplete}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-beige p-2 flex-shrink-0">
                  <Calendar className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-medium text-purple-dark">Completion Date</h4>
                  <p className="text-gray-500 text-sm">{project.endDate?.toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-beige-light p-4 border-t border-green-100">
            <p className="text-sm text-center w-full">Click to view detailed information and team members</p>
          </CardFooter>
        </Card>
      </div>

      {showDetail && (
        <ProjectDetail 
          project={project} 
          onClose={() => setShowDetail(false)} 
        />
      )}
    </>
  );
};

export default PrimeProject;
