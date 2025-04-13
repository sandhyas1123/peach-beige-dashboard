
export type ProjectStatus = "In Progress" | "Completed" | "On Hold";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface ProjectDetails {
  id: string;
  title: string;
  client: string;
  description: string;
  status: ProjectStatus;
  completionPercentage: number;
  startDate: Date;
  endDate?: Date;
  dealerCover: string; // Making this required
  teamMembers: TeamMember[];
  isPrime?: boolean;
}
