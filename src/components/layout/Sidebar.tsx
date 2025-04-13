
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FolderKanban, 
  ListChecks, 
  TicketCheck, 
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { name: "Projects", icon: <FolderKanban size={20} />, path: "/projects" },
    { name: "Tasks", icon: <ListChecks size={20} />, path: "/tasks" },
    { name: "Tickets", icon: <TicketCheck size={20} />, path: "/tickets" },
  ];

  return (
    <div 
      className={`flex flex-col bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-100">
        {!collapsed && (
          <h1 className="font-semibold text-purple-dark">Operations</h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 ${
                  collapsed ? "justify-center" : "space-x-3"
                } ${
                  location.pathname === item.path
                    ? "bg-peach-light text-purple-dark font-medium"
                    : "text-gray-600 hover:bg-beige-light"
                } transition-colors rounded-md mx-2`}
              >
                <span>{item.icon}</span>
                {!collapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className={`flex ${collapsed ? "justify-center" : "space-x-3"} items-center`}>
          <div className="w-8 h-8 rounded-full bg-purple-light flex items-center justify-center text-white text-sm font-medium">
            TS
          </div>
          {!collapsed && <div className="text-sm font-medium">Team Space</div>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
