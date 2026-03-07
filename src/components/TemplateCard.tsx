import { Button } from '@/components/ui/button';
import { Crown } from 'lucide-react';
import { ResumeTemplate } from '@/types/resume';

interface TemplateCardProps {
  template: ResumeTemplate;
  onSelect: (id: string) => void;
}

const TemplateCard = ({ template, onSelect }: TemplateCardProps) => (
  <div className="group overflow-hidden rounded-xl border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
    <div className="relative aspect-[3/4] bg-gradient-card p-4">
      <div className="h-full w-full rounded-lg border bg-background p-3 text-[6px] leading-relaxed">
        <div className="mb-2 h-3 w-20 rounded bg-foreground/10" />
        <div className="mb-1 h-1.5 w-full rounded bg-foreground/5" />
        <div className="mb-1 h-1.5 w-4/5 rounded bg-foreground/5" />
        <div className="mb-3 h-1.5 w-3/5 rounded bg-foreground/5" />
        <div className="mb-1 h-2 w-16 rounded bg-primary/20" />
        <div className="mb-1 h-1.5 w-full rounded bg-foreground/5" />
        <div className="mb-1 h-1.5 w-full rounded bg-foreground/5" />
        <div className="h-1.5 w-2/3 rounded bg-foreground/5" />
      </div>
      {template.isPremium && (
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-gradient-hero px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
          <Crown className="h-3 w-3" /> Premium
        </div>
      )}
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-sm">{template.name}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{template.description}</p>
      <Button size="sm" className="mt-3 w-full" onClick={() => onSelect(template.id)}>
        Use Template
      </Button>
    </div>
  </div>
);

export default TemplateCard;
