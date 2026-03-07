import { useState } from 'react';
import { useResumeStore } from '@/stores/resumeStore';
import ResumePreview from '@/components/ResumePreview';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Plus, Trash2, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Education, Experience, Skill, Project } from '@/types/resume';

const genId = () => Math.random().toString(36).slice(2, 9);

const Builder = () => {
  const {
    resume, updatePersonalInfo,
    addEducation, removeEducation, updateEducation,
    addExperience, removeExperience, updateExperience,
    addSkill, removeSkill,
    addProject, removeProject, updateProject,
  } = useResumeStore();

  const [showPreviewMobile, setShowPreviewMobile] = useState(false);

  const handleAddEducation = () => {
    addEducation({ id: genId(), school: '', degree: '', field: '', startDate: '', endDate: '', gpa: '' });
  };

  const handleAddExperience = () => {
    addExperience({ id: genId(), company: '', position: '', location: '', startDate: '', endDate: '', current: false, description: '' });
  };

  const handleAddSkill = () => {
    const name = prompt('Enter skill name:');
    if (name) addSkill({ id: genId(), name, level: 'Intermediate' });
  };

  const handleAddProject = () => {
    addProject({ id: genId(), name: '', description: '', technologies: '', link: '' });
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard"><ArrowLeft className="mr-1 h-4 w-4" />Back</Link>
            </Button>
            <span className="text-sm font-medium text-muted-foreground">Resume Builder</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="lg:hidden" onClick={() => setShowPreviewMobile(!showPreviewMobile)}>
              <Eye className="mr-1 h-4 w-4" />{showPreviewMobile ? 'Edit' : 'Preview'}
            </Button>
            <Button size="sm" asChild>
              <Link to="/preview"><Download className="mr-1 h-4 w-4" />Preview & Download</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Form Panel */}
        <div className={`flex-1 overflow-y-auto p-6 ${showPreviewMobile ? 'hidden lg:block' : ''}`}>
          <div className="mx-auto max-w-2xl">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="mb-6 w-full justify-start overflow-x-auto">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>

              {/* Personal Info */}
              <TabsContent value="personal" className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>Full Name</Label>
                    <Input className="mt-1" value={resume.personalInfo.fullName} onChange={(e) => updatePersonalInfo({ fullName: e.target.value })} placeholder="John Doe" />
                  </div>
                  <div>
                    <Label>Job Title</Label>
                    <Input className="mt-1" value={resume.personalInfo.title} onChange={(e) => updatePersonalInfo({ title: e.target.value })} placeholder="Software Engineer" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input className="mt-1" value={resume.personalInfo.email} onChange={(e) => updatePersonalInfo({ email: e.target.value })} placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input className="mt-1" value={resume.personalInfo.phone} onChange={(e) => updatePersonalInfo({ phone: e.target.value })} placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input className="mt-1" value={resume.personalInfo.location} onChange={(e) => updatePersonalInfo({ location: e.target.value })} placeholder="San Francisco, CA" />
                  </div>
                  <div>
                    <Label>LinkedIn</Label>
                    <Input className="mt-1" value={resume.personalInfo.linkedin || ''} onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })} placeholder="linkedin.com/in/johndoe" />
                  </div>
                </div>
                <div>
                  <Label>Professional Summary</Label>
                  <Textarea className="mt-1" rows={4} value={resume.personalInfo.summary} onChange={(e) => updatePersonalInfo({ summary: e.target.value })} placeholder="A brief summary of your professional background..." />
                </div>
              </TabsContent>

              {/* Experience */}
              <TabsContent value="experience" className="space-y-4">
                {resume.experience.map((exp) => (
                  <div key={exp.id} className="rounded-xl border bg-card p-5 shadow-card">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-medium">Work Experience</span>
                      <Button variant="ghost" size="sm" onClick={() => removeExperience(exp.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div><Label>Position</Label><Input className="mt-1" value={exp.position} onChange={(e) => updateExperience(exp.id, { position: e.target.value })} /></div>
                      <div><Label>Company</Label><Input className="mt-1" value={exp.company} onChange={(e) => updateExperience(exp.id, { company: e.target.value })} /></div>
                      <div><Label>Location</Label><Input className="mt-1" value={exp.location} onChange={(e) => updateExperience(exp.id, { location: e.target.value })} /></div>
                      <div className="flex gap-2">
                        <div className="flex-1"><Label>Start</Label><Input className="mt-1" value={exp.startDate} onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })} placeholder="Jan 2022" /></div>
                        <div className="flex-1"><Label>End</Label><Input className="mt-1" value={exp.endDate} onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })} placeholder="Present" /></div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Label>Description</Label>
                      <Textarea className="mt-1" rows={3} value={exp.description} onChange={(e) => updateExperience(exp.id, { description: e.target.value })} />
                    </div>
                  </div>
                ))}
                <Button variant="outline" onClick={handleAddExperience} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />Add Experience
                </Button>
              </TabsContent>

              {/* Education */}
              <TabsContent value="education" className="space-y-4">
                {resume.education.map((edu) => (
                  <div key={edu.id} className="rounded-xl border bg-card p-5 shadow-card">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-medium">Education</span>
                      <Button variant="ghost" size="sm" onClick={() => removeEducation(edu.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div><Label>School</Label><Input className="mt-1" value={edu.school} onChange={(e) => updateEducation(edu.id, { school: e.target.value })} /></div>
                      <div><Label>Degree</Label><Input className="mt-1" value={edu.degree} onChange={(e) => updateEducation(edu.id, { degree: e.target.value })} /></div>
                      <div><Label>Field of Study</Label><Input className="mt-1" value={edu.field} onChange={(e) => updateEducation(edu.id, { field: e.target.value })} /></div>
                      <div className="flex gap-2">
                        <div className="flex-1"><Label>Start</Label><Input className="mt-1" value={edu.startDate} onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })} placeholder="2018" /></div>
                        <div className="flex-1"><Label>End</Label><Input className="mt-1" value={edu.endDate} onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })} placeholder="2022" /></div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" onClick={handleAddEducation} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />Add Education
                </Button>
              </TabsContent>

              {/* Skills */}
              <TabsContent value="skills" className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {resume.skills.map((skill) => (
                    <span key={skill.id} className="inline-flex items-center gap-1 rounded-full border bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                      {skill.name}
                      <button onClick={() => removeSkill(skill.id)} className="ml-1 text-muted-foreground hover:text-destructive">×</button>
                    </span>
                  ))}
                </div>
                <Button variant="outline" onClick={handleAddSkill}>
                  <Plus className="mr-2 h-4 w-4" />Add Skill
                </Button>
              </TabsContent>

              {/* Projects */}
              <TabsContent value="projects" className="space-y-4">
                {resume.projects.map((proj) => (
                  <div key={proj.id} className="rounded-xl border bg-card p-5 shadow-card">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-medium">Project</span>
                      <Button variant="ghost" size="sm" onClick={() => removeProject(proj.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div><Label>Name</Label><Input className="mt-1" value={proj.name} onChange={(e) => updateProject(proj.id, { name: e.target.value })} /></div>
                      <div><Label>Technologies</Label><Input className="mt-1" value={proj.technologies} onChange={(e) => updateProject(proj.id, { technologies: e.target.value })} /></div>
                    </div>
                    <div className="mt-3">
                      <Label>Description</Label>
                      <Textarea className="mt-1" rows={2} value={proj.description} onChange={(e) => updateProject(proj.id, { description: e.target.value })} />
                    </div>
                  </div>
                ))}
                <Button variant="outline" onClick={handleAddProject} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />Add Project
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Live Preview Panel */}
        <div className={`w-full border-l bg-secondary/30 p-6 lg:w-[520px] lg:block ${showPreviewMobile ? '' : 'hidden'}`}>
          <div className="sticky top-20">
            <h3 className="mb-4 text-sm font-semibold text-muted-foreground">Live Preview</h3>
            <div className="origin-top scale-[0.72] lg:scale-[0.78]">
              <ResumePreview data={resume} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
