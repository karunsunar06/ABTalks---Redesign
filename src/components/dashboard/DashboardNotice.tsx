import { Sunrise, RefreshCw } from "lucide-react";
import type { DashboardMock } from "@/lib/dashboard-state";

export function DashboardNotice({ state }: { state: DashboardMock }) {
  if (!state.notice) return null;
  const Icon = state.key === "first-day" ? Sunrise : RefreshCw;

  return (
    <section
      className="animate-rise -mt-2 mb-1 flex items-start gap-3 rounded-2xl border border-border bg-accent-soft/60 p-4"
      style={{ animationDelay: "60ms" }}
    >
      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-accent">
        <Icon className="size-4" strokeWidth={2.2} />
      </span>
      <div className="min-w-0">
        <p className="text-[13px] font-semibold tracking-tight text-foreground">
          {state.notice.title}
        </p>
        <p className="mt-0.5 text-[12px] leading-relaxed text-muted-foreground">
          {state.notice.body}
        </p>
      </div>
    </section>
  );
}
