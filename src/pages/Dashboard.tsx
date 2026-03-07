import { Link } from 'react-router-dom';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Button } from '@/components/ui/button';
import { Plus, FileText, Clock, MoreHorizontal } from 'lucide-react';

const mockResumes = [
  { id: '1', title: 'Software Engineer Resume', updatedAt: '2 hours ago', template: 'Classic' },
  { id: '2', title: 'Product Manager Resume', updatedAt: '1 day ago', template: 'Modern' },
  { id: '3', title: 'Frontend Developer Resume', updatedAt: '3 days ago', template: 'Minimal' },
];

const Dashboard = () => (
  <div className="flex min-h-screen">
    <DashboardSidebar />
    <main className="flex-1 bg-surface p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage your resumes and create new ones.</p>
        </div>
        <Button asChild>
          <Link to="/builder"><Plus className="mr-2 h-4 w-4" />Create New Resume</Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Total Resumes', value: '3' },
          { label: 'Downloads', value: '12' },
          { label: 'Active Template', value: 'Classic' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border bg-card p-5 shadow-card">
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="mt-1 text-2xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Resumes */}
      <h2 className="mb-4 font-semibold">Recent Resumes</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* New resume card */}
        <Link
          to="/builder"
          className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed bg-card p-8 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Plus className="h-8 w-8" />
          <span className="text-sm font-medium">Create New Resume</span>
        </Link>

        {mockResumes.map((r) => (
          <div key={r.id} className="group rounded-xl border bg-card p-5 shadow-card transition-all hover:shadow-card-hover">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <button className="rounded-md p-1 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-secondary">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
            <h3 className="font-semibold text-sm">{r.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{r.template} Template</p>
            <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {r.updatedAt}
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default Dashboard;
