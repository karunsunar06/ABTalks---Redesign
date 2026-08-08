import { Flame, Zap } from "lucide-react";

const STREAK_DAYS = 7;
const XP = 1240;
const LEVEL = 6;
const LEVEL_TITLE = "Builder";
const XP_INTO_LEVEL = 62; // % toward next level

export function StreakXP({ celebrate = false }: { celebrate?: boolean }) {
  return (
    <section
      aria-label="Your momentum"
      className="animate-rise grid grid-cols-2 gap-3"
      style={{ animationDelay: "80ms" }}
    >
      {/* Streak */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex size-7 shrink-0 items-center justify-center">
            <span className="absolute inset-0 animate-flame-glow rounded-full bg-accent/25 blur-[6px]" />
            <Flame className="relative size-4 text-accent" strokeWidth={2.2} />
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
            {STREAK_DAYS}
          </span>
          <span className="text-[12px] font-medium text-muted-foreground">day streak</span>
        </p>
        <p className="mt-2 text-[11px] font-medium text-muted-foreground">
          Keep it moving today.
        </p>
      </div>

      {/* XP */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
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
            {XP.toLocaleString("en-IN")}
          </span>
          <span className="text-[12px] font-medium text-muted-foreground">XP</span>
        </p>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-accent"
            style={{ width: `${XP_INTO_LEVEL}%` }}
          />
        </div>
        <p className="mt-1.5 text-[11px] font-medium text-muted-foreground">
          Level {LEVEL} · {LEVEL_TITLE}
        </p>
      </div>
    </section>
  );
}