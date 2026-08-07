import { Compass, Terminal, Github, Repeat } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Choose a Track",
    description: "Pick the AI path that matches your goals and current level.",
  },
  {
    icon: Terminal,
    title: "Complete Today's Challenge",
    description: "One focused build, sized to fit around school or college.",
  },
  {
    icon: Github,
    title: "Share on GitHub & LinkedIn",
    description: "Push the code, write a short note, keep the record public.",
  },
  {
    icon: Repeat,
    title: "Repeat for 60 Days",
    description: "Show up again tomorrow. That is the whole method.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto w-full max-w-md px-5 sm:max-w-3xl sm:px-8">
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            The loop
          </span>
          <h2 className="mt-3 text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl">
            How the Challenge Works
          </h2>
        </div>

        <ol className="relative mt-10 sm:mt-14">
          <span
            aria-hidden="true"
            className="absolute left-[21px] top-3 bottom-3 w-px bg-border"
          />
          {steps.map(({ icon: Icon, title, description }, i) => (
            <li key={title} className="group relative flex gap-4 pb-6 last:pb-0">
              <span className="relative z-10 inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-foreground transition-all duration-300 group-hover:border-accent/50 group-hover:text-accent">
                <Icon className="size-5" strokeWidth={2.2} />
              </span>
              <div className="pt-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground">
                    STEP {i + 1}
                  </span>
                </div>
                <h3 className="mt-1 text-[16px] font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 rounded-3xl border border-border bg-surface px-6 py-5 text-center text-[15px] font-semibold tracking-tight text-foreground sm:mt-14">
          Progress comes from consistency, not perfection.
        </p>
      </div>
    </section>
  );
}
