
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import ProjectCard, { Project } from "../components/dashboard/ProjectCard";
import StatCard from "../components/dashboard/StatCard";
import { FolderKanban, ListChecks, TicketCheck, Clock } from "lucide-react";

const Dashboard = () => {
  // Sample data for projects
  const projects: Project[] = [
    {
      id: "1",
      title: "Website Redesign",
      description: "Complete overhaul of the company website with new branding, improved UX, and mobile responsiveness. Working with design team to implement new visual identity across all pages.",
      status: "In Progress",
      deadline: new Date(2025, 4, 30),
    },
    {
      id: "2",
      title: "Mobile App Development",
      description: "Creating a native mobile application for iOS and Android to complement our web platform. Focus on offline capabilities and seamless synchronization.",
      status: "On Hold",
      deadline: new Date(2025, 5, 15),
    },
    {
      id: "3",
      title: "CRM Integration",
      description: "Integrating our existing systems with a new CRM platform to improve customer data management and automate marketing processes.",
      status: "Completed",
      deadline: new Date(2025, 4, 10),
    },
    {
      id: "4",
      title: "SEO Optimization",
      description: "Comprehensive SEO audit and implementation of recommendations to improve search engine rankings and organic traffic.",
      status: "In Progress",
      deadline: new Date(2025, 4, 25),
    },
  ];

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-purple-dark mb-1">Dashboard</h1>
        <p className="text-gray-500">Welcome back to your operations overview.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard
          title="Active Projects"
          value={8}
          icon={FolderKanban}
          trend={12}
          color="text-blue-500"
        />
        <StatCard
          title="Open Tasks"
          value={27}
          icon={ListChecks}
          trend={-3}
          color="text-purple-500"
        />
        <StatCard
          title="Pending Tickets"
          value={5}
          icon={TicketCheck}
          trend={0}
          color="text-peach"
        />
        <StatCard
          title="Avg. Resolution Time"
          value="2.3 days"
          icon={Clock}
          trend={-15}
          color="text-green-500"
        />
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-purple-dark">Current Projects</h2>
          <button className="text-sm text-peach hover:text-peach-dark transition-colors">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
