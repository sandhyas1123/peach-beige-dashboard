
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import TasksSection from "../components/tasks/TasksSection";
import OnHoldTasks from "../components/tasks/OnHoldTasks";
import { Task } from "../components/tasks/TaskCard";
import { AlertTriangle, CheckSquare, Hourglass } from "lucide-react";

const Tasks = () => {
  // Sample data for tasks
  const allTasks: Task[] = [
    {
      id: "t1",
      title: "Senthuron Dashboard UI Redesign",
      description: "Completely redesign the dashboard UI for Senthuron's main application, focusing on improved usability, modern aesthetics, and responsive design.",
      priority: "High",
      deadline: new Date(2025, 4, 20),
      status: "In Progress",
      completion: 75,
      project: "Senthuron Core Application",
      teamMembers: [
        { id: "tm1", name: "Alex Johnson", role: "UI Designer", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
        { id: "tm2", name: "Sarah Chen", role: "UX Researcher", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: "tm3", name: "Miguel Rodriguez", role: "Frontend Developer", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
      ]
    },
    {
      id: "t2",
      title: "API Integration for Senthuron Analytics",
      description: "Integrate Senthuron's analytics platform with third-party data sources via RESTful APIs to provide comprehensive data analysis capabilities.",
      priority: "High",
      deadline: new Date(2025, 4, 15),
      status: "In Progress",
      completion: 50,
      project: "Senthuron Analytics Platform",
      teamMembers: [
        { id: "tm4", name: "Priya Patel", role: "Backend Developer", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
        { id: "tm5", name: "Thomas Wilson", role: "Data Engineer", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
        { id: "tm6", name: "Jessica Wong", role: "QA Engineer", avatar: "https://randomuser.me/api/portraits/women/32.jpg" },
      ]
    },
    {
      id: "t3",
      title: "Senthuron Mobile App Development",
      description: "Develop a native mobile application for Senthuron's platform, available on iOS and Android with core features from the web application.",
      priority: "High",
      deadline: new Date(2025, 4, 30),
      status: "Not Started",
      completion: 0,
      project: "Senthuron Mobile Experience",
      teamMembers: [
        { id: "tm7", name: "David Kim", role: "Mobile Developer", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
        { id: "tm8", name: "Emily Wright", role: "UI Designer", avatar: "https://randomuser.me/api/portraits/women/42.jpg" },
      ]
    },
    {
      id: "t4",
      title: "E-commerce Product Catalog Implementation",
      description: "Implement a comprehensive product catalog system for the e-commerce platform, including filtering, sorting, and search functionality.",
      priority: "Medium",
      deadline: new Date(2025, 5, 10),
      status: "In Progress",
      completion: 65,
      project: "RetailPlus E-commerce",
      teamMembers: [
        { id: "tm9", name: "Andrew Brown", role: "Full Stack Developer", avatar: "https://randomuser.me/api/portraits/men/44.jpg" },
        { id: "tm10", name: "Lisa Chang", role: "Database Administrator", avatar: "https://randomuser.me/api/portraits/women/26.jpg" },
      ]
    },
    {
      id: "t5",
      title: "Payment Gateway Integration",
      description: "Integrate multiple payment gateways into the platform to provide users with various payment options and ensure secure transactions.",
      priority: "Medium",
      deadline: new Date(2025, 5, 15),
      status: "On Hold",
      completion: 30,
      project: "SecureBank Mobile App",
      teamMembers: [
        { id: "tm11", name: "Robert Chen", role: "Backend Developer", avatar: "https://randomuser.me/api/portraits/men/55.jpg" },
        { id: "tm12", name: "Aisha Johnson", role: "Security Specialist", avatar: "https://randomuser.me/api/portraits/women/39.jpg" },
      ]
    },
    {
      id: "t6",
      title: "User Authentication System Upgrade",
      description: "Upgrade the existing user authentication system to implement multi-factor authentication and improve overall security.",
      priority: "Medium",
      deadline: new Date(2025, 5, 20),
      status: "Not Started",
      completion: 0,
      project: "SecureBank Mobile App",
      teamMembers: [
        { id: "tm13", name: "Mark Thompson", role: "Security Engineer", avatar: "https://randomuser.me/api/portraits/men/62.jpg" },
      ]
    },
    {
      id: "t7",
      title: "Analytics Dashboard Development",
      description: "Develop a real-time analytics dashboard to visualize key performance metrics and provide actionable insights for business users.",
      priority: "Low",
      deadline: new Date(2025, 6, 10),
      status: "In Progress",
      completion: 25,
      project: "FinEdge Analytics Dashboard",
      teamMembers: [
        { id: "tm14", name: "Sophia Garcia", role: "Data Visualization Specialist", avatar: "https://randomuser.me/api/portraits/women/57.jpg" },
        { id: "tm15", name: "Jason Park", role: "Frontend Developer", avatar: "https://randomuser.me/api/portraits/men/33.jpg" },
      ]
    },
    {
      id: "t8",
      title: "User Onboarding Flow Optimization",
      description: "Optimize the user onboarding flow to improve conversion rates and provide a better first-time user experience.",
      priority: "Low",
      deadline: new Date(2025, 6, 15),
      status: "On Hold",
      completion: 20,
      project: "MarketPro CRM",
      teamMembers: [
        { id: "tm16", name: "Emma Davis", role: "UX Designer", avatar: "https://randomuser.me/api/portraits/women/31.jpg" },
        { id: "tm17", name: "Brandon Taylor", role: "Product Manager", avatar: "https://randomuser.me/api/portraits/men/53.jpg" },
      ]
    },
    {
      id: "t9",
      title: "Automated Testing Framework Implementation",
      description: "Implement a comprehensive automated testing framework to improve code quality and reduce manual testing effort.",
      priority: "Low",
      deadline: new Date(2025, 6, 30),
      status: "Not Started",
      completion: 0,
      project: "QA Infrastructure",
      teamMembers: [
        { id: "tm18", name: "Rachel Green", role: "QA Engineer", avatar: "https://randomuser.me/api/portraits/women/67.jpg" },
      ]
    },
    {
      id: "t10",
      title: "Content Management System Migration",
      description: "Migrate the existing content management system to a more scalable and flexible platform to handle growing content needs.",
      priority: "Medium",
      deadline: new Date(2025, 5, 25),
      status: "On Hold",
      completion: 15,
      project: "WebContent Platform",
      teamMembers: [
        { id: "tm19", name: "Tyler Johnson", role: "Backend Developer", avatar: "https://randomuser.me/api/portraits/men/39.jpg" },
        { id: "tm20", name: "Natalie Harris", role: "Content Strategist", avatar: "https://randomuser.me/api/portraits/women/51.jpg" },
      ]
    },
  ];

  // Filter tasks by priority and status
  const highPriorityTasks = allTasks.filter(task => task.priority === "High" && task.status !== "On Hold");
  const mediumPriorityTasks = allTasks.filter(task => task.priority === "Medium" && task.status !== "On Hold");
  const lowPriorityTasks = allTasks.filter(task => task.priority === "Low" && task.status !== "On Hold");
  const onHoldTasks = allTasks.filter(task => task.status === "On Hold");

  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-semibold text-purple-dark mb-1">Tasks</h1>
          <p className="text-gray-500">Track and manage your team's tasks and assignments.</p>
        </div>
        <div className="text-xs text-gray-600">Senthuron</div>
      </div>
      
      <OnHoldTasks tasks={onHoldTasks} />
      
      <TasksSection 
        title="Vital Tasks" 
        description="High priority tasks requiring immediate attention"
        tasks={highPriorityTasks}
        icon={<AlertTriangle size={20} className="text-red-500" />}
      />
      
      <TasksSection 
        title="Important Tasks" 
        description="Medium priority tasks to be completed soon"
        tasks={mediumPriorityTasks}
        icon={<Hourglass size={20} className="text-amber-500" />}
      />
      
      <TasksSection 
        title="Standard Tasks" 
        description="Lower priority tasks with longer deadlines"
        tasks={lowPriorityTasks}
        icon={<CheckSquare size={20} className="text-blue-500" />}
      />
    </DashboardLayout>
  );
};

export default Tasks;
