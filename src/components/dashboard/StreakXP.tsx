import { Flame, Zap } from "lucide-react";
import { ProgressFlow } from "./ProgressFlow";
import type { DashboardMock } from "@/lib/dashboard-state";

export function StreakXP({
  celebrate = false,
  state,
}: {
  celebrate?: boolean;
  state: DashboardMock;
}) {
  return (
    <section
      aria-label="Your momentum"
      className="animate-rise relative grid grid-cols-2 gap-3"
      style={{ animationDelay: "80ms" }}
    >
      <ProgressFlow variant={state.key} />

      {/* Streak */}
      <div className="relative rounded-2xl border border-border bg-card p-4 shadow-soft">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex size-7 shrink-0 items-center justify-center">
            {state.streak > 0 && (
              <span className="absolute inset-0 animate-flame-glow rounded-full bg-accent/25 blur-[6px]" />
            )}
            <Flame
              className={`relative size-4 ${state.streak > 0 ? "text-accent" : "text-muted-foreground"}`}
              strokeWidth={2.2}
            />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Streak
          </span>
        </div>
        <p
          className={`mt-2.5 flex items-baseline gap-1.5 origin-left ${
            celebrate ? "animate-streak-pop" : ""
          }`}
        >
          <span className="text-[1.75rem] font-bold leading-none tracking-tight text-foreground">
            {state.streak}
          </span>
          <span className="text-[12px] font-medium text-muted-foreground">
            {state.streak === 1 ? "day streak" : "day streak"}
          </span>
        </p>
        <p className="mt-2 text-[11px] font-medium text-muted-foreground">{state.streakNote}</p>
      </div>

      {/* XP */}
      <div className="relative rounded-2xl border border-border bg-card p-4 shadow-soft">
        <div className="flex items-center gap-2">
          <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-accent-soft">
            <Zap className="size-3.5 text-accent" strokeWidth={2.2} />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Experience
          </span>
        </div>
        <p className="mt-2.5 flex items-baseline gap-1.5">
          <span className="text-[1.75rem] font-bold leading-none tracking-tight text-foreground">
            {state.xp.toLocaleString("en-IN")}
          </span>
          <span className="text-[12px] font-medium text-muted-foreground">XP</span>
        </p>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-700 ease-out"
            style={{ width: `${state.xpIntoLevel}%` }}
          />
        </div>
        <p className="mt-1.5 text-[11px] font-medium text-muted-foreground">
          Level {state.level} · {state.levelTitle}
        </p>
      </div>
    </section>
  );
}
