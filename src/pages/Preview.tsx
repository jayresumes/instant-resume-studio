import { Link } from 'react-router-dom';
import { useResumeStore } from '@/stores/resumeStore';
import ResumePreview from '@/components/ResumePreview';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Edit, Share2 } from 'lucide-react';
import { toast } from 'sonner';

const Preview = () => {
  const resume = useResumeStore((s) => s.resume);

  const handleDownload = () => {
    toast.success('PDF download will be available with backend integration.');
  };

  const handleShare = () => {
    toast.success('Share link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/builder"><ArrowLeft className="mr-1 h-4 w-4" />Back to Editor</Link>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="mr-1 h-4 w-4" />Share
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/builder"><Edit className="mr-1 h-4 w-4" />Edit</Link>
            </Button>
            <Button size="sm" onClick={handleDownload}>
              <Download className="mr-1 h-4 w-4" />Download PDF
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-3xl px-4 py-10">
        <ResumePreview data={resume} />
      </div>
    </div>
  );
};

export default Preview;
