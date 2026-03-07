import { ResumeData } from '@/types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = ({ data }: ResumePreviewProps) => {
  const { personalInfo, education, experience, skills, projects } = data;

  return (
    <div className="mx-auto w-full max-w-[595px] bg-background p-8 shadow-card-hover text-[11px] leading-relaxed border rounded-lg">
      {/* Header */}
      <div className="mb-5 border-b pb-4">
        <h1 className="text-xl font-bold text-foreground">
          {personalInfo.fullName || 'Your Full Name'}
        </h1>
        {personalInfo.title && (
          <p className="mt-0.5 text-sm text-primary font-medium">{personalInfo.title}</p>
        )}
        <div className="mt-2 flex flex-wrap gap-3 text-muted-foreground text-[10px]">
          {personalInfo.email && (
            <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{personalInfo.phone}</span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{personalInfo.location}</span>
          )}
          {personalInfo.linkedin && (
            <span className="flex items-center gap-1"><Linkedin className="h-3 w-3" />{personalInfo.linkedin}</span>
          )}
          {personalInfo.website && (
            <span className="flex items-center gap-1"><Globe className="h-3 w-3" />{personalInfo.website}</span>
          )}
        </div>
        {personalInfo.summary && (
          <p className="mt-2 text-muted-foreground">{personalInfo.summary}</p>
        )}
      </div>

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-4">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">{exp.position}</p>
                  <p className="text-muted-foreground">{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
                </div>
                <span className="whitespace-nowrap text-muted-foreground text-[10px]">
                  {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              {exp.description && <p className="mt-1 text-muted-foreground">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-4">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">{edu.degree} in {edu.field}</p>
                  <p className="text-muted-foreground">{edu.school}</p>
                </div>
                <span className="whitespace-nowrap text-muted-foreground text-[10px]">
                  {edu.startDate} – {edu.endDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-4">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span key={skill.id} className="rounded-full border bg-secondary px-2 py-0.5 text-[10px] text-secondary-foreground">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-4">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">Projects</h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-2">
              <p className="font-semibold text-foreground">{proj.name}</p>
              <p className="text-muted-foreground">{proj.description}</p>
              {proj.technologies && (
                <p className="mt-0.5 text-[10px] text-primary">{proj.technologies}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!personalInfo.fullName && experience.length === 0 && education.length === 0 && (
        <div className="flex h-40 items-center justify-center text-muted-foreground text-sm">
          Start filling out the form to see your resume preview
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
