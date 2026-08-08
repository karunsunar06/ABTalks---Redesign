import { ArrowRight, Check, Clock, Signal, Sparkles } from "lucide-react";

export function TodaysBuild({ onShipped }: { onShipped?: () => void }) {
  return (
    <section
      className="animate-rise rounded-3xl border border-border bg-card p-5 shadow-elevated transition-transform duration-200 active:scale-[0.99]"
      style={{ animationDelay: "120ms" }}
      aria-labelledby="todays-build-heading"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
          <Sparkles className="size-3" strokeWidth={2.4} />
          Recommended Today
        </span>
        <span className="text-[11px] font-medium tracking-tight text-muted-foreground">
          Day 12
        </span>
      </div>

      <p
        id="todays-build-heading"
        className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
      >
        Today&apos;s Build
      </p>

      <h2 className="mt-2 text-[1.35rem] font-bold leading-[1.2] tracking-[-0.02em] text-foreground">
        Resume Parser with an LLM
      </h2>

      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
        Turn any PDF resume into clean structured JSON using a single prompt, then ship it
        with a small web UI.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-[11px] font-semibold text-secondary-foreground">
          <Clock className="size-3.5" strokeWidth={2.4} />
          ~45 min
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-[11px] font-semibold text-secondary-foreground">
          <Signal className="size-3.5" strokeWidth={2.4} />
          Intermediate
        </span>
      </div>

      <div className="mt-5 space-y-2.5">
        <button className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-6 text-[15px] font-semibold text-background transition-transform duration-200 hover:brightness-110 active:scale-[0.97]">
          Continue Building
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <button
          onClick={onShipped}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl border border-border bg-accent-soft/60 px-6 text-[13px] font-semibold text-accent transition-colors hover:bg-accent-soft active:scale-[0.98]"
        >
          <Check className="size-3.5" strokeWidth={2.6} />
          Mark as shipped
        </button>
      </div>
    </section>
  );
}
