import { create } from 'zustand';
import { ResumeData, Education, Experience, Skill, Project, PersonalInfo } from '@/types/resume';

const defaultResume: ResumeData = {
  title: 'Untitled Resume',
  templateId: 'classic',
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    title: '',
    summary: '',
  },
  education: [],
  experience: [],
  skills: [],
  projects: [],
};

interface ResumeStore {
  resume: ResumeData;
  setResume: (resume: ResumeData) => void;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  addEducation: (edu: Education) => void;
  updateEducation: (id: string, edu: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  addExperience: (exp: Experience) => void;
  updateExperience: (id: string, exp: Partial<Experience>) => void;
  removeExperience: (id: string) => void;
  addSkill: (skill: Skill) => void;
  removeSkill: (id: string) => void;
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  removeProject: (id: string) => void;
  setTemplate: (templateId: string) => void;
  resetResume: () => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: defaultResume,
  setResume: (resume) => set({ resume }),
  updatePersonalInfo: (info) =>
    set((state) => ({
      resume: { ...state.resume, personalInfo: { ...state.resume.personalInfo, ...info } },
    })),
  addEducation: (edu) =>
    set((state) => ({
      resume: { ...state.resume, education: [...state.resume.education, edu] },
    })),
  updateEducation: (id, edu) =>
    set((state) => ({
      resume: {
        ...state.resume,
        education: state.resume.education.map((e) => (e.id === id ? { ...e, ...edu } : e)),
      },
    })),
  removeEducation: (id) =>
    set((state) => ({
      resume: { ...state.resume, education: state.resume.education.filter((e) => e.id !== id) },
    })),
  addExperience: (exp) =>
    set((state) => ({
      resume: { ...state.resume, experience: [...state.resume.experience, exp] },
    })),
  updateExperience: (id, exp) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: state.resume.experience.map((e) => (e.id === id ? { ...e, ...exp } : e)),
      },
    })),
  removeExperience: (id) =>
    set((state) => ({
      resume: { ...state.resume, experience: state.resume.experience.filter((e) => e.id !== id) },
    })),
  addSkill: (skill) =>
    set((state) => ({
      resume: { ...state.resume, skills: [...state.resume.skills, skill] },
    })),
  removeSkill: (id) =>
    set((state) => ({
      resume: { ...state.resume, skills: state.resume.skills.filter((s) => s.id !== id) },
    })),
  addProject: (project) =>
    set((state) => ({
      resume: { ...state.resume, projects: [...state.resume.projects, project] },
    })),
  updateProject: (id, project) =>
    set((state) => ({
      resume: {
        ...state.resume,
        projects: state.resume.projects.map((p) => (p.id === id ? { ...p, ...project } : p)),
      },
    })),
  removeProject: (id) =>
    set((state) => ({
      resume: { ...state.resume, projects: state.resume.projects.filter((p) => p.id !== id) },
    })),
  setTemplate: (templateId) =>
    set((state) => ({ resume: { ...state.resume, templateId } })),
  resetResume: () => set({ resume: defaultResume }),
}));
