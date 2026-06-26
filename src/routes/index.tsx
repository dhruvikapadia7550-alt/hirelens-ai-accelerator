import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles, FileText, MessageSquareText, Target, Map, Bot, Briefcase,
  ArrowRight, Check, X, Zap, Star, ShieldCheck, Upload, Play, ChevronRight,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import aiOrb from "@/assets/ai-orb.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HireLens — Your AI Career Coach" },
      { name: "description", content: "Analyze your resume, prepare for interviews, identify missing skills, and accelerate your career with AI." },
      { property: "og:title", content: "HireLens — Your AI Career Coach" },
      { property: "og:description", content: "Premium AI career acceleration platform for students, freshers and professionals." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustedStats />
      <Features />
      <Testimonials />
      <Comparison />
      <FAQ />
      <Footer />
      <ChatOrb />
    </div>
  );
}

/* --------------------------------- NAV --------------------------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-base font-semibold tracking-tight">HireLens</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {["Features", "Compare", "Testimonials", "FAQ"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button>
            <Button size="sm" className="bg-gradient-primary text-white shadow-glow hover:opacity-95">
              Get started <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

/* --------------------------------- HERO --------------------------------- */
function Hero() {
  return (
    <section className="relative pt-36 pb-24">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[700px]" style={{ background: "var(--gradient-hero)" }} />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_oklch(0.75_0.18_150)]" />
            New · HireBot AI v2 with career-aware reasoning
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Your <span className="text-gradient">AI Career Coach</span>
            <br className="hidden sm:block" /> for landing better opportunities
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Analyze your resume, prepare for interviews, identify missing skills, and accelerate your career — powered by AI built for the next generation of talent.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="bg-gradient-primary text-white shadow-glow hover:opacity-95">
              <Upload className="mr-2 h-4 w-4" /> Analyze Resume
            </Button>
            <Button size="lg" variant="outline" className="glass border-white/10 hover:bg-white/5">
              <Play className="mr-2 h-4 w-4" /> Start AI Interview
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> SOC2-ready</span>
            <span className="inline-flex items-center gap-1"><Zap className="h-3.5 w-3.5" /> Free forever plan</span>
          </div>
        </div>

        {/* Dashboard preview with floating cards */}
        <div className="relative mx-auto mt-16 max-w-6xl animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-primary opacity-20 blur-3xl" />
          <div className="glass overflow-hidden rounded-2xl shadow-elegant">
            <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-muted-foreground">hirelens.app/dashboard</span>
            </div>
            <img
              src={heroDashboard}
              alt="HireLens analytics dashboard preview showing career score, resume analysis, and skills radar"
              width={1600}
              height={1200}
              className="block w-full"
            />
          </div>

          {/* Floating cards */}
          <FloatingCard className="left-[-2%] top-[18%] hidden md:flex" delay="0s">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Resume score</div>
                <div className="text-lg font-semibold">87<span className="text-sm text-muted-foreground">/100</span></div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="right-[-3%] top-[10%] hidden md:flex" delay="1.2s">
            <div className="min-w-[180px]">
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Career growth</span>
                <span className="font-semibold text-emerald-400">+43%</span>
              </div>
              <MiniSpark />
            </div>
          </FloatingCard>

          <FloatingCard className="right-[2%] bottom-[-6%] hidden md:flex" delay="0.6s">
            <div className="flex items-center gap-3">
              <img src={aiOrb} alt="" width={36} height={36} className="h-9 w-9 animate-pulse-glow rounded-full" />
              <div>
                <div className="text-xs text-muted-foreground">HireBot AI</div>
                <div className="text-sm font-medium">Suggested: master React + System Design</div>
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ children, className = "", delay = "0s" }: { children: React.ReactNode; className?: string; delay?: string }) {
  return (
    <div
      className={`glass absolute animate-float items-center rounded-xl px-4 py-3 ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

function MiniSpark() {
  // simple inline svg sparkline
  const pts = "0,28 12,24 24,26 36,18 48,20 60,12 72,14 84,6 96,8";
  return (
    <svg viewBox="0 0 96 32" className="h-8 w-full">
      <defs>
        <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.7 0.2 265)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.7 0.2 265)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={pts} fill="none" stroke="oklch(0.78 0.18 260)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points={`${pts} 96,32 0,32`} fill="url(#sg)" />
    </svg>
  );
}

/* ---------------------------- TRUSTED / STATS ---------------------------- */
function TrustedStats() {
  const stats = [
    { v: 100000, suffix: "+", label: "Resumes analyzed" },
    { v: 50000, suffix: "+", label: "Interviews simulated" },
    { v: 92, suffix: "%", label: "Users improved score" },
    { v: 4.9, suffix: "/5", label: "Average rating", decimals: 1 },
  ];
  return (
    <section className="border-y border-white/5 bg-black/20 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by students & professionals worldwide
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient md:text-4xl">
                <Counter to={s.v} decimals={s.decimals} />{s.suffix}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  const formatted = to >= 1000
    ? Math.floor(val).toLocaleString()
    : val.toFixed(decimals);
  return <span ref={ref}>{formatted}</span>;
}

/* ------------------------------- FEATURES ------------------------------- */
function Features() {
  const items = [
    { icon: FileText, title: "AI Resume Scanner", desc: "ATS scoring, keyword gaps, grammar fixes, and rewrite suggestions in seconds." },
    { icon: MessageSquareText, title: "Interview Simulator", desc: "Realistic role-based interviews with confidence, clarity and accuracy scoring." },
    { icon: Target, title: "Skill Gap Analyzer", desc: "Compare your stack against any target company and see what's missing." },
    { icon: Map, title: "Career Roadmap Generator", desc: "Week-by-week learning plans tailored to your goals and current level." },
    { icon: Bot, title: "AI Career Chatbot", desc: "HireBot answers resume, interview and career questions with full context." },
    { icon: Briefcase, title: "Job Match Predictor", desc: "See your match score for any role with reasons and improvement levers." },
  ];
  return (
    <section id="features" className="py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" /> Built for the AI era
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            One platform. <span className="text-gradient">Every career advantage.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Replace a stack of disconnected tools with an intelligent system that learns your goals and accelerates your trajectory.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TESTIMONIALS ----------------------------- */
function Testimonials() {
  const items = [
    {
      name: "Aanya Sharma", role: "CS Senior · IIT Bombay",
      img: "https://i.pravatar.cc/100?img=47",
      quote: "HireLens rewrote my resume and ran 12 mock interviews in a weekend. I landed 4 offers including one at a FAANG.",
    },
    {
      name: "Daniel Okafor", role: "Frontend Engineer",
      img: "https://i.pravatar.cc/100?img=12",
      quote: "The skill-gap roadmap is unreal. It told me exactly what to learn for the role I wanted — and how long it would take.",
    },
    {
      name: "Mia Tanaka", role: "Data Analyst @ Fintech",
      img: "https://i.pravatar.cc/100?img=32",
      quote: "Confidence score during interviews changed everything. I went from blanking out to actually enjoying the conversation.",
    },
  ];
  return (
    <section id="testimonials" className="py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Loved by people who got <span className="text-gradient">the offer.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="glass flex h-full flex-col rounded-2xl p-6">
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} loading="lazy" width={40} height={40} className="h-10 w-10 rounded-full ring-2 ring-white/10" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ COMPARISON ------------------------------ */
function Comparison() {
  const traditional = ["Manual effort, hours per week", "Generic resume, no ATS insight", "Low confidence in interviews", "Guessing what skills to learn", "Mass-applying with no feedback"];
  const hirelens = ["AI does the heavy lifting in minutes", "ATS-optimized resume with live scoring", "Mock interviews with confidence metrics", "Roadmap tailored to your dream role", "Job match predictor with reasons"];
  return (
    <section id="compare" className="py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            The old way vs <span className="text-gradient">HireLens AI</span>
          </h2>
          <p className="mt-4 text-muted-foreground">A side-by-side look at why thousands are switching.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="glass rounded-2xl p-7">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-red-500/15 text-red-400"><X className="h-4 w-4" /></span>
              Traditional job search
            </div>
            <ul className="mt-6 space-y-3">
              {traditional.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl p-7 shadow-elegant" style={{ background: "linear-gradient(160deg, oklch(0.3 0.12 265 / 0.6), oklch(0.22 0.05 265 / 0.6))", border: "1px solid oklch(0.7 0.2 265 / 0.3)" }}>
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
            <div className="relative flex items-center gap-2 text-sm">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-primary text-white shadow-glow"><Sparkles className="h-4 w-4" /></span>
              HireLens AI
            </div>
            <ul className="relative mt-6 space-y-3">
              {hirelens.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ ---------------------------------- */
function FAQ() {
  const faqs = [
    { q: "Is HireLens free to start?", a: "Yes. You can analyze your resume, run mock interviews and chat with HireBot on the free plan. Upgrade anytime for advanced analytics and unlimited interviews." },
    { q: "How accurate is the resume score?", a: "Our model is trained on millions of recruiter-reviewed resumes and ATS heuristics from top companies. Scores are calibrated against real hiring outcomes." },
    { q: "What roles does the interview simulator support?", a: "Software, frontend, backend, data, AI/ML, cybersecurity and product roles — with company-specific question banks for IBM, Google, Microsoft and more." },
    { q: "Is my data secure?", a: "All resumes are encrypted in transit and at rest. We never share your data with third parties or use it to train public models." },
    { q: "Can I export my reports?", a: "Yes — every analysis, interview and roadmap can be exported as a polished PDF you can share with mentors or recruiters." },
  ];
  return (
    <section id="faq" className="py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Frequently asked questions</h2>
          <p className="mt-4 text-muted-foreground">Everything you need to know before getting started.</p>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="glass rounded-xl border-0 px-5">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* --------------------------------- FOOTER --------------------------------- */
function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/5">
      <div className="absolute inset-x-0 -top-32 -z-10 h-64" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="glass rounded-3xl p-10 text-center shadow-elegant">
          <h3 className="text-2xl font-bold sm:text-4xl">
            Ready to <span className="text-gradient">accelerate your career?</span>
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Join 100,000+ students and professionals using HireLens to land better opportunities.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="bg-gradient-primary text-white shadow-glow hover:opacity-95">
              Get started free <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="glass border-white/10">Talk to sales</Button>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-white shadow-glow"><Sparkles className="h-4 w-4" /></span>
              <span className="font-semibold">HireLens</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              The intelligent career acceleration platform. Built for the next generation of talent.
            </p>
          </div>
          {[
            { h: "Product", l: ["Resume Analyzer", "Interview Simulator", "Skill Gap", "Job Match"] },
            { h: "Company", l: ["About", "Careers", "Press", "Contact"] },
            { h: "Legal", l: ["Privacy", "Terms", "Security", "Cookies"] },
          ].map((c) => (
            <div key={c.h}>
              <div className="text-sm font-semibold">{c.h}</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {c.l.map((x) => <li key={x}><a href="#" className="hover:text-foreground">{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} HireLens, Inc. All rights reserved.</div>
          <div>Made with intelligence in mind.</div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------- CHAT ORB ------------------------------- */
function ChatOrb() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="glass mb-3 w-80 origin-bottom-right animate-fade-up rounded-2xl p-4 shadow-elegant">
          <div className="flex items-center gap-2">
            <img src={aiOrb} alt="" width={28} height={28} className="h-7 w-7 rounded-full" />
            <div>
              <div className="text-sm font-semibold">HireBot AI</div>
              <div className="text-[11px] text-emerald-400">Online · typing…</div>
            </div>
          </div>
          <div className="mt-3 rounded-xl bg-white/5 p-3 text-sm">
            Hi! I'm HireBot. Ask me anything about your resume, interviews, or career path.
          </div>
          <div className="mt-3 flex gap-2">
            <input
              placeholder="Ask anything…"
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-primary/60"
            />
            <Button size="sm" className="bg-gradient-primary text-white">Send</Button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open HireBot AI"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-white shadow-glow animate-pulse-glow transition-transform hover:scale-105"
      >
        <Bot className="h-6 w-6" />
      </button>
    </div>
  );
}
