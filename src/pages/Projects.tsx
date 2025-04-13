import React, { useState } from "react";
import { ProjectDetails, ProjectStatus } from "@/types/projects";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PrimeProject from "@/components/projects/PrimeProject";
import CurrentProjects from "@/components/projects/CurrentProjects";
import DealerProjects from "@/components/projects/DealerProjects";

const Projects: React.FC = () => {
  const primeProject: ProjectDetails = {
    id: "prime-001",
    title: "Innovative Green Tech Campus",
    client: "EcoInnovate Corp",
    description: "Sustainable technology campus with zero carbon footprint",
    status: "Completed",
    completionPercentage: 100,
    startDate: new Date("2023-01-15"),
    endDate: new Date("2024-03-30"),
    dealerCover: "/path/to/prime-project-image.jpg",
    teamMembers: [
      {
        id: "team-001",
        name: "Alice Johnson",
        role: "Project Manager",
        avatar: "/path/to/alice-avatar.jpg"
      },
      {
        id: "team-002",
        name: "Bob Williams",
        role: "Lead Architect",
        avatar: "/path/to/bob-avatar.jpg"
      }
    ],
    isPrime: true
  };

  const currentProjects: ProjectDetails[] = [
    {
      id: "current-001",
      title: "Smart City Infrastructure",
      client: "City of Innovation",
      description: "Developing the next-gen infrastructure for a smart city.",
      status: "In Progress",
      completionPercentage: 60,
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-12-31"),
      teamMembers: [
        {
          id: "team-003",
          name: "Charlie Brown",
          role: "Software Engineer",
          avatar: "/path/to/charlie-avatar.jpg"
        },
        {
          id: "team-004",
          name: "Diana Miller",
          role: "Data Scientist",
          avatar: "/path/to/diana-avatar.jpg"
        }
      ]
    },
    {
      id: "current-002",
      title: "Eco-Friendly Housing Project",
      client: "Green Living Solutions",
      description: "Building sustainable and eco-friendly housing for the future.",
      status: "In Progress",
      completionPercentage: 80,
      startDate: new Date("2024-02-15"),
      endDate: new Date("2024-11-15"),
      teamMembers: [
        {
          id: "team-005",
          name: "Eva Garcia",
          role: "Environmental Specialist",
          avatar: "/path/to/eva-avatar.jpg"
        },
        {
          id: "team-006",
          name: "Frank Lee",
          role: "Construction Manager",
          avatar: "/path/to/frank-avatar.jpg"
        }
      ]
    }
  ];

  const dealers = [
    {
      id: "dealer-001",
      name: "Green Builders Inc",
      cover: "/path/to/dealer-cover.jpg",
      projectCount: 5,
      projects: currentProjects
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <PrimeProject project={primeProject} />
        <CurrentProjects projects={currentProjects} />
        <DealerProjects dealers={dealers} />
      </div>
    </DashboardLayout>
  );
};

export default Projects;
