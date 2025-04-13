
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import TicketsTable, { Ticket } from "../components/tickets/TicketsTable";

const Tickets = () => {
  // Sample data for tickets
  const tickets: Ticket[] = [
    {
      id: "T1023",
      client: "Acme Corp",
      issue: "Unable to access admin dashboard after recent security update",
      priority: "High",
      status: "In Progress",
      created: new Date(2025, 4, 11),
    },
    {
      id: "T1022",
      client: "Global Solutions",
      issue: "Request for new user accounts for marketing team members",
      priority: "Low",
      status: "Open",
      created: new Date(2025, 4, 12),
    },
    {
      id: "T1021",
      client: "Tech Innovators",
      issue: "Data import failed for Q2 analytics - need assistance with CSV formatting",
      priority: "Medium",
      status: "Open",
      created: new Date(2025, 4, 12),
    },
    {
      id: "T1020",
      client: "Sunshine Retailers",
      issue: "Payment gateway integration showing errors during checkout process",
      priority: "High",
      status: "In Progress",
      created: new Date(2025, 4, 10),
    },
    {
      id: "T1019",
      client: "Northern Services",
      issue: "Mobile app crashing when attempting to upload profile photos",
      priority: "Medium",
      status: "Resolved",
      created: new Date(2025, 4, 9),
    },
    {
      id: "T1018",
      client: "City Healthcare",
      issue: "Need assistance with exporting large reports for compliance audit",
      priority: "Low",
      status: "Resolved",
      created: new Date(2025, 4, 8),
    },
    {
      id: "T1017",
      client: "Evergreen Media",
      issue: "Missing file attachments on client portal - urgent meeting materials",
      priority: "High",
      status: "Open",
      created: new Date(2025, 4, 12),
    },
  ];

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-purple-dark mb-1">Client Inquiries & Tickets</h1>
        <p className="text-gray-500">Manage and respond to client support requests.</p>
      </div>
      
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex items-center">
          <div className="mr-4">
            <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status-filter"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block p-2 focus:outline-none focus:ring-1 focus:ring-peach"
            >
              <option value="all">All Statuses</option>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="priority-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              id="priority-filter"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block p-2 focus:outline-none focus:ring-1 focus:ring-peach"
            >
              <option value="all">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        
        <div className="ml-auto">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            &nbsp;
          </label>
          <button className="bg-peach hover:bg-peach-dark text-white font-medium rounded-lg text-sm px-4 py-2 transition-colors">
            New Ticket
          </button>
        </div>
      </div>
      
      <TicketsTable tickets={tickets} />
    </DashboardLayout>
  );
};

export default Tickets;
