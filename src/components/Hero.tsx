import { Menu, ArrowRight, Flame, Github, Play, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { WaveBackground } from "@/components/WaveBackground";

const trustItems = [
  "Real AI Projects",
  "GitHub Portfolio",
  "Daily Streaks",
  "Industry Ready",
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[248px] rounded-[2.25rem] border border-border bg-card p-2 shadow-elevated">
      <div className="overflow-hidden rounded-[1.85rem] bg-surface">
        {/* status bar */}
        <div className="flex items-center justify-between px-5 pb-2 pt-3">
          <span className="text-[10px] font-semibold text-muted-foreground">9:41</span>
          <div className="h-1.5 w-10 rounded-full bg-border" />
          <span className="text-[10px] font-semibold text-muted-foreground">100%</span>
        </div>

        <div className="space-y-3 px-3 pb-4">
          {/* streak card */}
          <div className="rounded-2xl bg-accent-soft p-3.5">
            <div className="flex items-center gap-1.5">
              <Flame className="size-3.5 text-accent" strokeWidth={2.4} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                Current streak
              </span>
            </div>
            <div className="mt-1.5 flex items-baseline gap-1.5">
              <span className="text-3xl font-bold leading-none tracking-tight text-foreground">
                27
              </span>
              <span className="text-[11px] font-medium text-muted-foreground">days</span>
            </div>
            <div className="mt-3 flex gap-1">
              {Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-4 flex-1 rounded-[3px] ${
                    i > 11 ? "bg-accent/25" : "bg-accent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* today's challenge */}
          <div className="rounded-2xl border border-border bg-card p-3.5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Today · Day 28
            </span>
            <p className="mt-1 text-[13px] font-semibold leading-snug text-foreground">
              Build a resume parser with an LLM
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-1 text-[9px] font-semibold text-secondary-foreground">
                <Github className="size-2.5" /> Push
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-1 text-[9px] font-semibold text-secondary-foreground">
                ~45 min
              </span>
            </div>
          </div>

          {/* progress */}
          <div className="rounded-2xl border border-border bg-card p-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                60-day progress
              </span>
              <span className="text-[11px] font-bold text-foreground">45%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[45%] rounded-full bg-foreground" />
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
              <Check className="size-3 text-accent" strokeWidth={3} />
              27 projects shipped publicly
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-background">
      <WaveBackground className="h-[520px]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[90px]" />

      <div className="relative mx-auto w-full max-w-md px-5 sm:max-w-3xl sm:px-8">
        {/* nav */}
        <nav className="flex items-center justify-between py-5">
          <span className="text-[17px] font-bold tracking-tight text-foreground">
            AB<span className="text-accent">Talks</span>
          </span>
          <button
            aria-label="Open menu"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <Menu className="size-5" strokeWidth={2} />
          </button>
        </nav>

        <div className="pb-14 pt-6 text-center sm:pt-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold tracking-tight text-muted-foreground">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            India&apos;s AI Building Challenge
          </span>

          <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-6xl">
            Don&apos;t just learn AI.
            <br />
            <span className="text-accent">Build with it.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-[19rem] text-[15px] leading-relaxed text-muted-foreground sm:max-w-lg sm:text-base">
            Ship one real AI project every day for 60 days. Keep your GitHub streak alive,
            grow a public portfolio, and graduate industry-ready.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              to="/dashboard"
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-foreground px-6 text-[15px] font-semibold text-background shadow-elevated transition-transform active:scale-[0.98]"
            >
              Start Your 60-Day Journey
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 text-[15px] font-semibold text-foreground transition-colors hover:bg-secondary">
              <Play className="size-3.5" strokeWidth={2.5} />
              See How It Works
            </button>
          </div>

          <div className="mt-12">
            <PhoneMockup />
          </div>

          <ul className="mx-auto mt-10 grid max-w-xs grid-cols-2 gap-x-4 gap-y-3 sm:max-w-lg sm:grid-cols-4">
            {trustItems.map((item) => (
              <li
                key={item}
                className="flex items-center justify-center gap-1.5 text-[12px] font-medium text-muted-foreground"
              >
                <span className="size-1 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
