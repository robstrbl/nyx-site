import { ArrowRight, Github, Mail, Sparkles, Cpu, Cog, Battery, Car, Code2, Wrench } from "lucide-react";
import React from "react";

// 🎨 Single-file React portfolio with a luxe, animated look.
// TailwindCSS is assumed available in your project.
// No new deps required (no Framer Motion) — all effects are CSS.

const PROJECTS = [
  {
    title: "FM‑Flow AutoTrader",
    summary:
      "AI‑assisted trading research: data pipelines, RL/DQN, and live‑risk tooling.",
    tags: ["AI", "RL/DQN", ".NET", "Python"],
    icon: <Code2 className="w-5 h-5" aria-hidden />,
    href: "#",
  },
  {
    title: "ESP32 + Matter Firmware",
    summary:
      "SmartThings‑connected ESP32‑C6 device. BLE NUS‑style service, FreeRTOS tasks, OTA.",
    tags: ["ESP‑IDF", "Matter", "BLE"],
    icon: <Cog className="w-5 h-5" aria-hidden />,
    href: "#",
  },
  {
    title: "Solar Micro‑Grid",
    summary:
      "AC‑coupled PV + Sungold TP6048, LiFePO4 banks, multi‑building energy sharing.",
    tags: ["Energy", "IoT", "Telemetry"],
    icon: <Battery className="w-5 h-5" aria-hidden />,
    href: "#",
  },
  {
    title: "Automotive Diagnostics",
    summary:
      "OBD live data, VVT troubleshooting, wiring diagrams. Dodge 5.9L / 3.6L.",
    tags: ["CAN/OBD2", "Diagnostics"],
    icon: <Car className="w-5 h-5" aria-hidden />,
    href: "#",
  },
];

const LINKS = {
  github: "https://github.com/robstrbl",
  email: "mailto:you@example.com",
};

export default function Portfolio() {
  return (
    <main className="min-h-screen relative text-slate-100 overflow-hidden">
      {/* Backgrounds */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
        {/* Accent radial fades */}
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Header />
      <Hero />
      <Stats />
      <Projects />
      <Skills />
      <CTA />
      <Footer />

      {/* Local CSS for premium effects */}
      <StyleBlock />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20 ring-1 ring-sky-400/30">
            <Sparkles className="h-4 w-4 text-sky-300" aria-hidden />
          </span>
          <span className="text-slate-100 group-hover:text-white">Nyx</span>
          <span className="hidden md:inline text-slate-400">— Engineer & Maker</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#resume" className="hover:text-white">Resume</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={LINKS.github} className="btn-icon" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href={LINKS.email} className="btn-icon" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative">
      {/* Glow beams */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.10),transparent)]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/5 px-3 py-1 text-xs text-sky-200">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20"><Sparkles className="h-3 w-3"/></span>
          Multidisciplinary Engineering — AI • Firmware • Energy • Automotive
        </p>
        <h1 className="text-4xl/tight md:text-6xl/tight font-extrabold tracking-tight">
          Building useful systems at the edge of <span className="gradient-text">AI</span>,
          <br className="hidden md:block" /> embedded <span className="gradient-text">firmware</span>, and
          <br className="hidden md:block" /> resilient <span className="gradient-text">energy</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-slate-300 text-lg">
          I design end‑to‑end solutions: RL/DQN‑driven trading research, ESP32 firmware (Matter + BLE),
          and off‑grid solar micro‑grids. I like clean code, clear signals, and systems that ship.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            See projects <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-ghost">Contact</a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { label: "Years engineering", value: "15+" },
    { label: "Projects shipped", value: "40+" },
    { label: "Domains", value: "AI • IoT • Energy • Auto" },
  ];
  return (
    <section aria-label="Stats" className="mx-auto max-w-6xl px-4">
      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="text-2xl font-bold tracking-tight">{s.value}</div>
            <div className="text-slate-400 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="section-title">Featured Projects</h2>
      <p className="mt-2 text-slate-300 max-w-2xl">A few things I’ve been building and iterating on.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: { title: string; summary: string; tags: string[]; icon: React.ReactNode; href: string } }) {
  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", x + "px");
    el.style.setProperty("--y", y + "px");
  };
  return (
    <a
      href={p.href}
      onMouseMove={onMove}
      className="card group"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 text-sky-300">{p.icon}</div>
        <div>
          <h3 className="font-semibold text-lg group-hover:text-white transition-colors">{p.title}</h3>
          <p className="mt-1 text-slate-300 text-sm leading-relaxed">{p.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

function Skills() {
  const rows = [
    { title: "AI & Data", icon: <Cpu className="w-4 h-4" />, bullets: ["RL/DQN, transformers", "Python, Pandas, Jupyter", "Market data pipelines"], pct: 90 },
    { title: "Firmware & IoT", icon: <Cog className="w-4 h-4" />, bullets: ["ESP‑IDF, FreeRTOS, BLE", "Matter/SmartThings", "C/C++, UART/CAN"], pct: 88 },
    { title: "Platforms & Web", icon: <Code2 className="w-4 h-4" />, bullets: [".NET 8, ASP.NET Core", "React + TS", "OIDC/Keycloak"], pct: 86 },
    { title: "Energy Systems", icon: <Battery className="w-4 h-4" />, bullets: ["AC‑coupled PV", "LiFePO4 banks", "Telemetry/monitoring"], pct: 84 },
    { title: "Automotive", icon: <Wrench className="w-4 h-4" />, bullets: ["OBD live data", "Electrical diagnostics", "Repairs & upgrades"], pct: 82 },
    { title: "DevOps", icon: <Cog className="w-4 h-4" />, bullets: ["Docker Compose", "CI/CD basics", "Cloud deploys"], pct: 75 },
  ];
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="section-title">Core Skills</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {rows.map((r) => (
          <div key={r.title} className="card">
            <div className="flex items-center gap-2">
              <span className="text-sky-300">{r.icon}</span>
              <h3 className="font-semibold">{r.title}</h3>
            </div>
            <ul className="mt-2 space-y-1 text-slate-300 text-sm">
              {r.bullets.map((b) => (
                <li key={b} className="pl-4 relative">
                  <span className="dot" />{b}
                </li>
              ))}
            </ul>
            <div className="mt-4 h-2 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-sky-400 via-cyan-300 to-fuchsia-400 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] animate-shimmer" style={{ width: `${r.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-24">
      <div className="card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Have a project in AI, firmware, or energy?</h2>
          <p className="mt-2 text-slate-300">Let’s talk details — scope, constraints, and how to ship fast.</p>
        </div>
        <div className="flex gap-3">
          <a href={LINKS.email} className="btn-primary"><Mail className="h-4 w-4"/> Email me</a>
          <a href={LINKS.github} className="btn-ghost"><Github className="h-4 w-4"/> GitHub</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-4 pb-14">
      <div className="card">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Resume</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">Add a link to your current resume or a PDF. I can also generate a tailored version for roles in telemetry, firmware, or AI research.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="#" className="btn-ghost">View PDF</a>
          <a href="#" className="btn-primary">Request tailored resume <ArrowRight className="h-4 w-4"/></a>
        </div>
      </div>
      <footer className="mt-10 text-center text-slate-500 text-sm">© {new Date().getFullYear()} Nyx. All rights reserved.</footer>
    </section>
  );
}

function StyleBlock() {
  return (
    <style>{`
      .gradient-text{
        background: linear-gradient(90deg, #7dd3fc, #e879f9, #7dd3fc);
        -webkit-background-clip: text; background-clip: text; color: transparent;
        background-size: 200% 100%; animation: textshine 9s linear infinite;
      }
      @keyframes textshine{ to{ background-position: -200% 0; } }

      .btn-primary{ @apply group inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-4 py-2 font-medium text-slate-950 shadow-lg shadow-sky-500/20 hover:-translate-y-0.5 transition; }
      .btn-ghost{ @apply inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-white/5 px-4 py-2 font-medium hover:bg-white/10 transition; }
      .btn-icon{ @apply p-2 rounded-xl hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-400; }

      .section-title{ @apply text-2xl md:text-3xl font-bold tracking-tight; }
      .chip{ @apply text-xs rounded-full border border-slate-700/60 bg-slate-800/60 px-2 py-1 text-slate-300; }
      .dot{ @apply absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-sky-400; }
      .card{ @apply relative block rounded-2xl border border-slate-800 bg-white/5 p-5 transition; }
      .stat-card{ @apply rounded-2xl border border-slate-800 bg-white/5 p-5 text-center; }

      /* Spotlight hover effect */
      .card::before{
        content:""; position:absolute; inset:-1px; border-radius:1rem; pointer-events:none;
        background: radial-gradient(120px circle at var(--x, 50%) var(--y, 50%), rgba(56,189,248,.15), transparent 60%);
        opacity:0; transition:opacity .2s ease;
      }
      .card:hover::before{ opacity:1; }

      /* Subtle shimmering bar */
      @keyframes shimmer{ from{ background-position: 0 0; } to{ background-position: 200% 0; } }
      .animate-shimmer{ animation: shimmer 2.4s linear infinite; background-size: 200% 100%; }
    `}</style>
  );
}
