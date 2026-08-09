import { Hammer, ChevronRight, Lock } from "lucide-react";
import type { DashboardMock } from "@/lib/dashboard-state";

export function RecentAchievement({ state }: { state: DashboardMock }) {
  const recent = state.recent;

  return (
    <section className="animate-rise" style={{ animationDelay: "340ms" }}>
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Recent achievement
      </h2>
      <div className="mt-3 flex items-center gap-3 rounded-2xl border border-border bg-accent-soft/60 p-4">
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-accent">
          {recent ? (
            <Hammer className="size-4" strokeWidth={2.2} />
          ) : (
            <Lock className="size-4" strokeWidth={2.2} />
          )}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold tracking-tight text-foreground">
            {recent ? recent.name : "Your first achievement is waiting."}
          </p>
          <p className="truncate text-[11px] text-muted-foreground">
            {recent ? recent.note : "Complete your first build to unlock it."}
          </p>
        </div>
        {recent && (
          <ChevronRight className="size-4 shrink-0 text-muted-foreground" strokeWidth={2} />
        )}
      </div>
    </section>
  );
}
