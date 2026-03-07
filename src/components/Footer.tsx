import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Footer = () => (
  <footer className="border-t bg-secondary/50">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-hero">
              <FileText className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span>Instant Resume</span>
          </Link>
          <p className="text-sm text-muted-foreground">Build professional resumes in minutes, not hours.</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-sm">Product</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/templates" className="hover:text-foreground transition-colors">Templates</Link>
            <Link to="/#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/builder" className="hover:text-foreground transition-colors">Resume Builder</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-sm">Company</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="cursor-pointer hover:text-foreground transition-colors">About</span>
            <span className="cursor-pointer hover:text-foreground transition-colors">Contact</span>
            <span className="cursor-pointer hover:text-foreground transition-colors">Blog</span>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-sm">Legal</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="cursor-pointer hover:text-foreground transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-foreground transition-colors">Terms</span>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Instant Resume Builder. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
