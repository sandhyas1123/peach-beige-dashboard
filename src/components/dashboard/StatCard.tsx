
import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon: Icon,
  trend,
  color = "text-peach" 
}) => {
  return (
    <div className="bg-white rounded-lg p-5 card-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-semibold text-purple-dark">{value}</h3>
          
          {trend !== undefined && (
            <div className={`flex items-center text-sm mt-2 ${
              trend >= 0 ? "text-green-600" : "text-red-600"
            }`}>
              <span>{trend >= 0 ? "+" : ""}{trend}%</span>
              <span className="ml-1 text-gray-500 text-xs">vs last month</span>
            </div>
          )}
        </div>
        
        <div className={`p-3 rounded-full ${color.replace("text", "bg")}/10`}>
          <Icon className={`${color}`} size={20} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
