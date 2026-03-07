import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import type { Easing } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Layout, Sparkles, Download, Star, Check } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const features = [
  { icon: FileText, title: 'Instant Resume Creation', desc: 'Fill out a simple form and watch your professional resume come to life in real time.' },
  { icon: Layout, title: 'Professional Templates', desc: 'Choose from a curated collection of modern, ATS-friendly resume templates.' },
  { icon: Sparkles, title: 'AI Resume Suggestions', desc: 'Get smart content suggestions powered by AI to make your resume stand out.' },
  { icon: Download, title: 'Download as PDF', desc: 'Export your polished resume as a high-quality PDF ready to share with employers.' },
];

const testimonials = [
  { name: 'Sarah Chen', role: 'Software Engineer', text: 'I created a stunning resume in under 10 minutes. The live preview is a game-changer!' },
  { name: 'Marcus Johnson', role: 'Marketing Manager', text: 'The templates are incredibly professional. I landed 3 interviews in the first week.' },
  { name: 'Emily Rodriguez', role: 'UX Designer', text: 'Best resume builder I\'ve used. The AI suggestions helped me articulate my experience perfectly.' },
];

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} custom={0} className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Now with AI-powered suggestions
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Build Your Professional Resume{' '}
            <span className="text-gradient">in Minutes</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-5 text-lg text-muted-foreground md:text-xl">
            Stop spending hours formatting. Create a stunning, ATS-friendly resume with our intuitive builder and professional templates.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link to="/builder">Create Resume</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/templates">View Templates</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-lg text-center">
          <h2 className="text-3xl font-bold">Everything you need to land your dream job</h2>
          <p className="mt-3 text-muted-foreground">Powerful features designed to make resume creation effortless.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-xl border bg-card p-6 shadow-card transition-all hover:shadow-card-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Loved by thousands</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-xl border bg-card p-6 shadow-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">"{t.text}"</p>
              <div className="mt-4">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Simple, transparent pricing</h2>
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {/* Free */}
          <div className="rounded-xl border bg-card p-8 shadow-card">
            <h3 className="text-lg font-bold">Free</h3>
            <div className="mt-2 text-3xl font-extrabold">$0<span className="text-base font-normal text-muted-foreground">/mo</span></div>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {['1 Resume', '3 Templates', 'PDF Download', 'Basic Editor'].map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{f}</li>
              ))}
            </ul>
            <Button variant="outline" className="mt-8 w-full" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
          {/* Premium */}
          <div className="relative rounded-xl border-2 border-primary bg-card p-8 shadow-elevated">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-hero px-4 py-0.5 text-xs font-semibold text-primary-foreground">
              Most Popular
            </div>
            <h3 className="text-lg font-bold">Premium</h3>
            <div className="mt-2 text-3xl font-extrabold">$9<span className="text-base font-normal text-muted-foreground">/mo</span></div>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {['Unlimited Resumes', 'All Templates', 'AI Suggestions', 'PDF & DOCX Export', 'Priority Support'].map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{f}</li>
              ))}
            </ul>
            <Button className="mt-8 w-full" asChild>
              <Link to="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
