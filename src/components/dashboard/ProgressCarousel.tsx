import { useEffect, useRef, useState } from "react";
import { Github, Globe, Sparkles, Flame, Trophy, Rocket, GitBranch } from "lucide-react";

function CardShell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <article className="w-[85%] shrink-0 snap-center sm:w-[19rem]">
      <div className="h-full rounded-3xl border border-border bg-surface p-5 shadow-card transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </h3>
        <div className="mt-4">{children}</div>
      </div>
    </article>
  );
}

function ProjectsCard() {
  return (
    <CardShell label="Projects">
      <div className="space-y-4">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold leading-none tracking-tight text-foreground">
            27
          </span>
          <span className="text-[13px] font-medium text-muted-foreground">
            projects built
          </span>
        </div>

        <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card p-3">
          <Github className="size-4 text-foreground" strokeWidth={2.2} />
          <div className="flex-1">
            <p className="text-[12px] font-semibold text-foreground">GitHub activity</p>
            <div className="mt-1.5 flex gap-[3px]">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-4 flex-1 rounded-[3px] ${
                    i > 13 ? "bg-accent/25" : i % 5 === 0 ? "bg-accent/50" : "bg-accent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-3">
          <span className="flex items-center gap-2 text-[12px] font-semibold text-foreground">
            <Globe className="size-4 text-muted-foreground" strokeWidth={2.2} />
            Public profile
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-semibold text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            Live
          </span>
        </div>
      </div>
    </CardShell>
  );
}

const learning = [
  { name: "Python", level: "Strong", value: 82 },
  { name: "LLMs", level: "Advancing", value: 68 },
  { name: "Prompt Engineering", level: "Advancing", value: 61 },
  { name: "Machine Learning", level: "Building", value: 38 },
];

function LearningCard() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <CardShell label="Learning">
      <div className="space-y-4">
        {learning.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex items-baseline justify-between">
              <span className="text-[13px] font-semibold tracking-tight text-foreground">
                {skill.name}
              </span>
              <span className="text-[11px] font-medium text-muted-foreground">
                {skill.level}
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  width: shown ? `${skill.value}%` : "0%",
                  transitionDelay: `${i * 110}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  );
}

const achievements = [
  { name: "First Ship", note: "Day 1 project pushed", icon: Rocket },
  { name: "Streak Keeper", note: "21 days unbroken", icon: Flame },
  { name: "Pull Shark", note: "25 merged pull requests", icon: GitBranch },
  { name: "Deep Diver", note: "First LLM fine-tune", icon: Sparkles },
];

function AchievementsCard() {
  return (
    <CardShell label="Achievements">
      <div className="space-y-2.5">
        {achievements.map(({ name, note, icon: Icon }) => (
          <div
            key={name}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 transition-colors duration-200 hover:bg-secondary"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-xl border border-border bg-surface text-muted-foreground">
              <Icon className="size-[15px]" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold tracking-tight text-foreground">
                {name}
              </p>
              <p className="truncate text-[11px] text-muted-foreground">{note}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-1 text-[11px] font-medium text-muted-foreground">
          <Trophy className="size-3.5" strokeWidth={2} />
          4 of 12 unlocked
        </div>
      </div>
    </CardShell>
  );
}

export function ProgressCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (el.scrollWidth / 3));
    setActive(Math.min(2, Math.max(0, idx)));
  };

  return (
    <section className="animate-rise" style={{ animationDelay: "200ms" }}>
      <div
        ref={scroller}
        onScroll={onScroll}
        className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth", overscrollBehaviorX: "contain" }}
      >
        <ProjectsCard />
        <LearningCard />
        <AchievementsCard />
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-5 bg-foreground" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
