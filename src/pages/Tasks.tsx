
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

const Tasks = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-purple-dark mb-1">Tasks</h1>
        <p className="text-gray-500">Track and manage your team's tasks and assignments.</p>
      </div>
      
      <div className="bg-white rounded-lg p-8 text-center card-shadow">
        <h3 className="text-lg font-medium text-purple-dark mb-2">Task Management</h3>
        <p className="text-gray-500 mb-4">This page is under development. Check back soon for task management features.</p>
      </div>
    </DashboardLayout>
  );
};

export default Tasks;
