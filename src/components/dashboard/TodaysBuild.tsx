import { ArrowRight, Clock, Signal, Sparkles } from "lucide-react";

export function TodaysBuild() {
  return (
    <section
      className="animate-rise rounded-3xl border border-border bg-surface p-5 shadow-card transition-transform duration-200 active:scale-[0.99]"
      style={{ animationDelay: "120ms" }}
      aria-labelledby="todays-build-heading"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-semibold tracking-tight text-accent">
          <Sparkles className="size-3" strokeWidth={2.4} />
          Recommended Today
        </span>
        <span
          id="todays-build-heading"
          className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
        >
          Today&apos;s Build
        </span>
      </div>

      <h2 className="mt-4 text-[1.35rem] font-bold leading-[1.2] tracking-[-0.02em] text-foreground">
        Resume Parser with an LLM
      </h2>

      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
        Turn any PDF resume into clean structured JSON using a single prompt, then ship it
        with a small web UI.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-secondary-foreground">
          <Clock className="size-3.5" strokeWidth={2.4} />
          ~45 min
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-secondary-foreground">
          <Signal className="size-3.5" strokeWidth={2.4} />
          Intermediate
        </span>
      </div>

      <button className="group mt-5 inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-6 text-[15px] font-semibold text-background transition-transform duration-200 hover:brightness-110 active:scale-[0.97]">
        Continue Building
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </section>
  );
}
