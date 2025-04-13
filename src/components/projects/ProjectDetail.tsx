
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, Users2Icon, BadgeCheckIcon, XIcon } from "lucide-react";
import { ProjectDetails } from "@/types/projects";

interface ProjectDetailProps {
  project: ProjectDetails;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold flex items-center">
            {project.title}
            <Badge 
              className={`ml-3 ${
                project.status === "Completed" 
                  ? "bg-green-100 text-green-700" 
                  : project.status === "In Progress" 
                    ? "bg-blue-100 text-blue-700" 
                    : "bg-amber-100 text-amber-700"
              }`} 
              variant="outline"
            >
              {project.status}
            </Badge>
          </DialogTitle>
          <DialogDescription>Client: {project.client}</DialogDescription>
        </DialogHeader>
        
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <div className="mt-4">
          <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
            <img 
              src={project.dealerCover || "/placeholder.svg"} 
              alt={project.client} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CalendarIcon className="h-5 w-5 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Start Date</p>
                <p className="font-medium">{project.startDate.toLocaleDateString()}</p>
              </div>
            </div>
            
            {project.endDate && (
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <CalendarIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">End Date</p>
                  <p className="font-medium">{project.endDate.toLocaleDateString()}</p>
                </div>
              </div>
            )}
            
            {/* Conditionally display timeToComplete if available */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <ClockIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Time to Complete</p>
                <p className="font-medium">
                  {project.endDate && project.startDate 
                    ? `${Math.round((project.endDate.getTime() - project.startDate.getTime()) / (1000 * 60 * 60 * 24))} days`
                    : "Not specified"}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Users2Icon className="mr-2 h-5 w-5 text-gray-600" />
              Team Members ({project.teamMembers.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.teamMembers.map((member) => (
                <div key={member.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {project.status === "Completed" && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100 flex items-center">
              <BadgeCheckIcon className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <p className="font-medium text-green-800">Project successfully completed</p>
                <p className="text-sm text-green-700">All deliverables have been provided to the client</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
