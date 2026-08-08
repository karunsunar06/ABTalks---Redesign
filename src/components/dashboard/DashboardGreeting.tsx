export function DashboardGreeting() {
  return (
    <div className="relative overflow-hidden pt-8 pb-6">
      {/* soft floating blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-[-15%] size-64 rounded-full bg-accent/12 blur-[80px] animate-blob-drift" />
        <div className="absolute -top-10 right-[-20%] size-56 rounded-full bg-chart-3/10 blur-[80px] animate-blob-drift-slow" />
        <div className="absolute top-24 left-1/3 size-48 rounded-full bg-accent/8 blur-[70px] animate-blob-drift-alt" />
      </div>

      <div className="animate-rise" style={{ animationDelay: "40ms" }}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Day 28 of 60
        </p>
        <h1 className="mt-2 text-[1.75rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground">
          Good Evening, Builder <span className="align-middle">👋</span>
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
          Continue building your future.
        </p>
      </div>
    </div>
  );
}
