
import React from "react";
import { Search, User, Bell } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 py-2 px-4 flex items-center justify-between h-16">
      <div className="relative w-64">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2 focus:outline-none focus:ring-1 focus:ring-peach"
          placeholder="Search..."
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 bg-peach w-2 h-2 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-3">
          <div className="h-9 w-9 rounded-full bg-purple-light flex items-center justify-center text-white">
            <User size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
