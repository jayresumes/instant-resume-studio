import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplateCard from '@/components/TemplateCard';
import { ResumeTemplate } from '@/types/resume';
import { useResumeStore } from '@/stores/resumeStore';

const templates: ResumeTemplate[] = [
  { id: 'classic', name: 'Classic', description: 'A timeless, professional layout perfect for any industry.', preview: '', isPremium: false },
  { id: 'modern', name: 'Modern', description: 'Clean and contemporary with a fresh design approach.', preview: '', isPremium: false },
  { id: 'minimal', name: 'Minimal', description: 'Simple and elegant. Let your content speak for itself.', preview: '', isPremium: false },
  { id: 'creative', name: 'Creative', description: 'Bold design for creative professionals who want to stand out.', preview: '', isPremium: true },
  { id: 'executive', name: 'Executive', description: 'Sophisticated layout for senior and leadership roles.', preview: '', isPremium: true },
  { id: 'technical', name: 'Technical', description: 'Optimized for tech roles with skills-focused sections.', preview: '', isPremium: false },
];

const Templates = () => {
  const navigate = useNavigate();
  const setTemplate = useResumeStore((s) => s.setTemplate);

  const handleSelect = (id: string) => {
    setTemplate(id);
    navigate('/builder');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto mb-12 max-w-lg text-center">
          <h1 className="text-3xl font-bold">Resume Templates</h1>
          <p className="mt-3 text-muted-foreground">Choose a template to get started. Customize it to match your style.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <TemplateCard key={t.id} template={t} onSelect={handleSelect} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Templates;
