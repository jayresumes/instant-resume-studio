export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  title: string;
  summary: string;
  linkedin?: string;
  website?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link?: string;
}

export interface ResumeData {
  id?: string;
  title: string;
  templateId: string;
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  updatedAt?: string;
}

export interface ResumeTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  isPremium: boolean;
}
