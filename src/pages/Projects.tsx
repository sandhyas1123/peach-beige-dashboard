
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import PrimeProject from "../components/projects/PrimeProject";
import DealerProjects from "../components/projects/DealerProjects";
import CurrentProjects from "../components/projects/CurrentProjects";
import { ProjectDetails } from "../components/projects/ProjectDetail";

const Projects = () => {
  // Sample data for the prime project
  const primeProject: ProjectDetails = {
    id: "prime1",
    title: "Enterprise Web Application Redesign",
    client: "Senthuron",
    description: "Complete redesign and redevelopment of Senthuron's flagship enterprise application, featuring enhanced UI/UX, improved performance, and new advanced analytics capabilities.",
    status: "Completed",
    completionPercentage: 100,
    startDate: new Date(2024, 9, 15),
    endDate: new Date(2025, 2, 30),
    timeToComplete: "5 months, 15 days",
    dealerCover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbSUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
    teamMembers: [
      { id: "tm1", name: "Alex Johnson", role: "Project Lead", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
      { id: "tm2", name: "Sarah Chen", role: "UX Designer", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
      { id: "tm3", name: "Miguel Rodriguez", role: "Frontend Developer", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
      { id: "tm4", name: "Priya Patel", role: "Backend Developer", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
      { id: "tm5", name: "Thomas Wilson", role: "QA Specialist", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
    ],
    isPrime: true
  };

  // Sample data for dealer projects
  const dealers = [
    {
      id: "d1",
      name: "TechNova Solutions",
      cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fHww",
      projectCount: 4,
      projects: [
        {
          id: "d1p1",
          title: "Cloud Migration Solution",
          client: "TechNova Solutions",
          description: "Implementation of a comprehensive cloud migration strategy, moving from on-premises infrastructure to a scalable cloud environment with minimal downtime.",
          status: "In Progress",
          completionPercentage: 75,
          startDate: new Date(2024, 11, 10),
          dealerCover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fHww",
          teamMembers: [
            { id: "d1t1", name: "James Wilson", role: "Cloud Architect", avatar: "https://randomuser.me/api/portraits/men/52.jpg" },
            { id: "d1t2", name: "Elena Gomez", role: "DevOps Engineer", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
            { id: "d1t3", name: "Daniel Kim", role: "System Administrator", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
          ]
        },
        {
          id: "d1p2",
          title: "Data Analytics Platform",
          client: "TechNova Solutions",
          description: "Development of a real-time data analytics platform that provides actionable insights from various data sources.",
          status: "On Hold",
          completionPercentage: 40,
          startDate: new Date(2024, 10, 5),
          dealerCover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fHww",
          teamMembers: [
            { id: "d1t4", name: "Lisa Chang", role: "Data Scientist", avatar: "https://randomuser.me/api/portraits/women/26.jpg" },
            { id: "d1t5", name: "Raj Patel", role: "Backend Developer", avatar: "https://randomuser.me/api/portraits/men/37.jpg" },
          ]
        },
        {
          id: "d1p3",
          title: "AI Customer Service Bot",
          client: "TechNova Solutions",
          description: "Creation of an AI-powered customer service chatbot to handle common inquiries and support requests.",
          status: "In Progress",
          completionPercentage: 60,
          startDate: new Date(2025, 0, 15),
          dealerCover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fHww",
          teamMembers: [
            { id: "d1t6", name: "Olivia Martinez", role: "ML Engineer", avatar: "https://randomuser.me/api/portraits/women/29.jpg" },
            { id: "d1t7", name: "Chris Lee", role: "Frontend Developer", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
          ]
        },
      ]
    },
    {
      id: "d2",
      name: "FinEdge Innovations",
      cover: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      projectCount: 3,
      projects: [
        {
          id: "d2p1",
          title: "Secure Payment Gateway",
          client: "FinEdge Innovations",
          description: "Implementation of a secure, PCI-compliant payment processing system with multi-factor authentication and fraud detection.",
          status: "In Progress",
          completionPercentage: 50,
          startDate: new Date(2024, 11, 20),
          dealerCover: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
          teamMembers: [
            { id: "d2t1", name: "Robert Chen", role: "Security Specialist", avatar: "https://randomuser.me/api/portraits/men/55.jpg" },
            { id: "d2t2", name: "Aisha Johnson", role: "Backend Developer", avatar: "https://randomuser.me/api/portraits/women/39.jpg" },
            { id: "d2t3", name: "Mark Thompson", role: "QA Engineer", avatar: "https://randomuser.me/api/portraits/men/62.jpg" },
          ]
        },
        {
          id: "d2p2",
          title: "Financial Analytics Dashboard",
          client: "FinEdge Innovations",
          description: "Creation of a comprehensive financial analytics dashboard with real-time market data integration and predictive analytics.",
          status: "Completed",
          completionPercentage: 100,
          startDate: new Date(2024, 9, 5),
          endDate: new Date(2024, 11, 15),
          dealerCover: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
          teamMembers: [
            { id: "d2t4", name: "Emily Wright", role: "Data Analyst", avatar: "https://randomuser.me/api/portraits/women/42.jpg" },
            { id: "d2t5", name: "Jason Park", role: "UI Developer", avatar: "https://randomuser.me/api/portraits/men/33.jpg" },
          ]
        },
      ]
    },
    {
      id: "d3",
      name: "HealthPlus Systems",
      cover: "https://images.unsplash.com/photo-1581092921461-6484e3a2d1e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fHww",
      projectCount: 2,
      projects: [
        {
          id: "d3p1",
          title: "Patient Management System",
          client: "HealthPlus Systems",
          description: "Development of a comprehensive patient management system for healthcare providers, including scheduling, medical records, and billing integration.",
          status: "In Progress",
          completionPercentage: 65,
          startDate: new Date(2024, 10, 10),
          dealerCover: "https://images.unsplash.com/photo-1581092921461-6484e3a2d1e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fHww",
          teamMembers: [
            { id: "d3t1", name: "Sophia Garcia", role: "Project Manager", avatar: "https://randomuser.me/api/portraits/women/57.jpg" },
            { id: "d3t2", name: "Michael Johnson", role: "Backend Developer", avatar: "https://randomuser.me/api/portraits/men/29.jpg" },
            { id: "d3t3", name: "Emma Davis", role: "UI/UX Designer", avatar: "https://randomuser.me/api/portraits/women/31.jpg" },
            { id: "d3t4", name: "David Wilson", role: "Database Administrator", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
          ]
        },
        {
          id: "d3p2",
          title: "Telehealth Platform",
          client: "HealthPlus Systems",
          description: "Implementation of a secure telehealth platform enabling virtual consultations between healthcare providers and patients.",
          status: "On Hold",
          completionPercentage: 30,
          startDate: new Date(2024, 11, 20),
          dealerCover: "https://images.unsplash.com/photo-1581092921461-6484e3a2d1e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fHww",
          teamMembers: [
            { id: "d3t5", name: "Ryan Smith", role: "Frontend Developer", avatar: "https://randomuser.me/api/portraits/men/37.jpg" },
            { id: "d3t6", name: "Jennifer Lee", role: "Security Specialist", avatar: "https://randomuser.me/api/portraits/women/63.jpg" },
          ]
        },
      ]
    },
  ];

  // Sample data for current projects
  const currentProjects: ProjectDetails[] = [
    {
      id: "cp1",
      title: "E-commerce Platform",
      client: "RetailPlus",
      description: "Development of a modern e-commerce platform with integrated inventory management, payment processing, and customer relationship management.",
      status: "In Progress",
      completionPercentage: 75,
      startDate: new Date(2024, 11, 1),
      dealerCover: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fHww",
      teamMembers: [
        { id: "cp1t1", name: "Andrew Brown", role: "Project Manager", avatar: "https://randomuser.me/api/portraits/men/44.jpg" },
        { id: "cp1t2", name: "Jessica Wong", role: "Frontend Developer", avatar: "https://randomuser.me/api/portraits/women/32.jpg" },
        { id: "cp1t3", name: "Brandon Taylor", role: "Backend Developer", avatar: "https://randomuser.me/api/portraits/men/53.jpg" },
      ]
    },
    {
      id: "cp2",
      title: "Mobile Banking App",
      client: "SecureBank",
      description: "Creation of a secure and user-friendly mobile banking application with biometric authentication, transaction history, and bill payment features.",
      status: "In Progress",
      completionPercentage: 50,
      startDate: new Date(2024, 11, 15),
      dealerCover: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fHww",
      teamMembers: [
        { id: "cp2t1", name: "Natalie Harris", role: "UX Designer", avatar: "https://randomuser.me/api/portraits/women/51.jpg" },
        { id: "cp2t2", name: "Kevin Martinez", role: "iOS Developer", avatar: "https://randomuser.me/api/portraits/men/58.jpg" },
        { id: "cp2t3", name: "Rachel Green", role: "Android Developer", avatar: "https://randomuser.me/api/portraits/women/67.jpg" },
        { id: "cp2t4", name: "Tyler Johnson", role: "Security Specialist", avatar: "https://randomuser.me/api/portraits/men/39.jpg" },
      ]
    },
    {
      id: "cp3",
      title: "CRM Integration",
      client: "MarketPro",
      description: "Integration of a customer relationship management system with existing sales, marketing, and customer service platforms to create a unified customer view.",
      status: "In Progress",
      completionPercentage: 35,
      startDate: new Date(2025, 0, 5),
      dealerCover: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fHww",
      teamMembers: [
        { id: "cp3t1", name: "Eric Williams", role: "Business Analyst", avatar: "https://randomuser.me/api/portraits/men/65.jpg" },
        { id: "cp3t2", name: "Stephanie Davis", role: "Backend Developer", avatar: "https://randomuser.me/api/portraits/women/35.jpg" },
      ]
    },
    {
      id: "cp4",
      title: "Supply Chain Management",
      client: "LogiTech",
      description: "Development of an end-to-end supply chain management solution with real-time tracking, inventory optimization, and predictive analytics.",
      status: "Completed",
      completionPercentage: 100,
      startDate: new Date(2024, 9, 20),
      endDate: new Date(2025, 1, 10),
      dealerCover: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRlYW0lMjB3b3JraW5nfGVufDB8fDB8fHww",
      teamMembers: [
        { id: "cp4t1", name: "Jack Thompson", role: "Project Lead", avatar: "https://randomuser.me/api/portraits/men/72.jpg" },
        { id: "cp4t2", name: "Alicia Rodriguez", role: "Business Analyst", avatar: "https://randomuser.me/api/portraits/women/45.jpg" },
        { id: "cp4t3", name: "Marcus Johnson", role: "Full Stack Developer", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
        { id: "cp4t4", name: "Leah Chen", role: "QA Specialist", avatar: "https://randomuser.me/api/portraits/women/29.jpg" },
      ]
    },
  ];

  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-semibold text-purple-dark mb-1">Projects</h1>
          <p className="text-gray-500">Manage all your team's projects in one place.</p>
        </div>
        <div className="text-xs text-gray-600">Senthuron</div>
      </div>
      
      <div className="space-y-10">
        <PrimeProject project={primeProject} />
        <DealerProjects dealers={dealers} />
        <CurrentProjects projects={currentProjects} />
      </div>
    </DashboardLayout>
  );
};

export default Projects;
