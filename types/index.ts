export interface Project {
  id: string;
  name: string;
  category: string;
  problem: string;
  architecture: string;
  stack: string[];
  scalability: string;
}

export interface Technology {
  name: string;
  description: string;
}

export interface TechCategory {
  category: string;
  technologies: Technology[];
}
