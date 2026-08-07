import { Play, LayoutGrid, Compass, Users } from "lucide-react";

const actions = [
  { label: "Resume Challenge", icon: Play },
  { label: "Browse Challenges", icon: LayoutGrid },
  { label: "Explore", icon: Compass },
  { label: "Community", icon: Users },
];

export function QuickActions() {
  return (
    <section className="animate-rise" style={{ animationDelay: "280ms" }}>
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Quick actions
      </h2>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {actions.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-surface p-4 text-left shadow-card transition-all duration-200 hover:bg-secondary active:scale-[0.97]"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon className="size-4" strokeWidth={2.2} />
            </span>
            <span className="text-[13px] font-semibold leading-tight tracking-tight text-foreground">
              {label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
