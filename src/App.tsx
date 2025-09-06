import { ArrowRight, Github, Mail, Sparkles, Cog, Cpu, Battery, Car } from "lucide-react";

// Simple, single-file React portfolio. Tailwind is available.
// Replace links/emails below to personalize.

const PROJECTS = [
  {
    title: "FM‑Flow AutoTrader",
    summary:
      "Research platform for AI‑assisted day trading: data pipeline, RL/DQN experiments, broker API integration, and risk tooling.",
    tags: ["AI", "RL/DQN", ".NET", "Python"],
    icon: <Cpu className="w-5 h-5" aria-hidden />,
    href: "#",
  },
  {
    title: "ESP32 + Matter Firmware",
    summary:
      "SmartThings‑connected ESP32‑C6 device, custom Bluetooth NUS‑style service, FreeRTOS tasks, telemetry + OTA.",
    tags: ["ESP‑IDF", "Matter", "FreeRTOS", "BLE"],
    icon: <Cog className="w-5 h-5" aria-hidden />,
    href: "#",
  },
  {
    title: "Solar Micro‑Grid",
    summary:
      "AC‑coupled PV + Sungold TP6048 inverters, LiFePO4 banks, multi‑building energy‑sharing architecture and monitoring.",
    tags: ["Energy", "IoT", "Telemetry"],
    icon: <Battery className="w-5 h-5" aria-hidden />,
    href: "#",
  },
  {
    title: "Automotive Diagnostics",
    summary:
      "Dodge 5.9L/3.6L projects: OBD data, fan‑clutch upgrades, electrical troubleshooting, custom wiring diagrams.",
    tags: ["CAN/OBD2", "Mechanicals"],
    icon: <Car className="w-5 h-5" aria-hidden />,
    href: "#",
  },
];

const LINKS = {
  github: "https://github.com/your‑github",
  email: "mailto:you@example.com",
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Nav */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20 ring-1 ring-sky-400/30">
              <Sparkles className="h-4 w-4 text-sky-300" aria-hidden />
            </span>
            <span className="text-slate-100">Nyx</span>
            <span className="hidden md:inline text-slate-400">— Engineer & Maker</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-slate-300">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#resume" className="hover:text-white">Resume</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={LINKS.github} className="p-2 rounded-xl hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-400" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href={LINKS.email} className="p-2 rounded-xl hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-400" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
          <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/5 px-3 py-1 text-xs text-sky-200">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20"><Sparkles className="h-3 w-3"/></span>
            Multidisciplinary Engineering — AI • Firmware • Energy • Automotive
          </p>
          <h1 className="text-4xl/tight md:text-6xl/tight font-extrabold tracking-tight">
            Building useful systems at the edge of <span className="text-sky-300">AI</span>,
            <br className="hidden md:block" /> embedded <span className="text-sky-300">firmware</span>, and
            <br className="hidden md:block" /> resilient <span className="text-sky-300">energy</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-slate-300 text-lg">
            I design end‑to‑end solutions: RL/DQN‑driven trading research, ESP32 firmware (Matter + BLE),
            and off‑grid solar micro‑grids. I like clean code, clear signals, and systems that ship.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-4 py-2 font-medium text-slate-950 shadow-lg shadow-sky-500/20 hover:translate-y-[-1px] transition">
              See projects <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-white/5 px-4 py-2 font-medium hover:bg-white/10">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Projects</h2>
        <p className="mt-2 text-slate-300">A few things I’ve been building and iterating on.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <a key={p.title} href={p.href} className="block rounded-2xl border border-slate-800 bg-white/5 p-5 hover:bg-white/10 hover:shadow-lg hover:shadow-sky-500/10 transition">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-sky-300">{p.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-1 text-slate-300 text-sm leading-relaxed">{p.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs rounded-full border border-slate-700/60 bg-slate-800/60 px-2 py-1 text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Core Skills</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <SkillCard title="AI & Data" bullets={["RL/DQN, transformers", "Python, Pandas, Jupyter", "Market data pipelines"]} />
          <SkillCard title="Firmware & IoT" bullets={["ESP‑IDF, FreeRTOS, BLE", "Matter/SmartThings", "C/C++, UART/CAN"]} />
          <SkillCard title="Platforms & Web" bullets={[".NET 8, ASP.NET Core", "React + TypeScript", "OIDC/Keycloak"]} />
          <SkillCard title="Energy Systems" bullets={["AC‑coupled PV", "LiFePO4 banks", "Telemetry/monitoring"]} />
          <SkillCard title="Automotive" bullets={["OBD live data", "Electrical diagnostics", "Repairs & upgrades"]} />
          <SkillCard title="DevOps" bullets={["Docker Compose", "CI/CD basics", "Cloud deploys"]} />
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="rounded-2xl border border-slate-800 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Resume</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">Add a link to your current resume or a PDF. I can also generate a tailored version for roles in telemetry, firmware, or AI research.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="#" className="rounded-xl border border-slate-700 bg-white/5 px-4 py-2 hover:bg-white/10">View PDF</a>
            <a href="#" className="rounded-xl bg-sky-500 text-slate-950 px-4 py-2 font-medium hover:translate-y-[-1px] shadow shadow-sky-500/20 inline-flex items-center gap-2">Request tailored resume <ArrowRight className="h-4 w-4"/></a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-2xl border border-slate-800 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Get in touch</h2>
          <p className="mt-2 text-slate-300">Have a project in AI trading, embedded firmware, or energy systems? Let’s talk.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={LINKS.email} className="rounded-xl bg-sky-500 text-slate-950 px-4 py-2 font-medium hover:translate-y-[-1px] shadow shadow-sky-500/20 inline-flex items-center gap-2"><Mail className="h-4 w-4"/> Email me</a>
            <a href="#" className="rounded-xl border border-slate-700 bg-white/5 px-4 py-2 hover:bg-white/10"><Github className="h-4 w-4 inline mr-2"/> GitHub</a>
          </div>
        </div>
        <footer className="mt-10 text-center text-slate-500 text-sm">© {new Date().getFullYear()} Nyx. All rights reserved.</footer>
      </section>
    </main>
  );
}

function SkillCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-white/5 p-5">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-2 space-y-1 text-slate-300 text-sm">
        {bullets.map((b) => (
          <li key={b} className="pl-4 relative">
            <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-sky-400" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
