import { CalendarCheck, Hammer, Share2, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: CalendarCheck,
    title: "One Challenge Every Day",
    description:
      "A single meaningful challenge each day to build skills without feeling overwhelmed.",
  },
  {
    icon: Hammer,
    title: "Build Real Projects",
    description:
      "Work on practical AI projects that become part of your GitHub portfolio.",
  },
  {
    icon: Share2,
    title: "Share Your Journey",
    description:
      "Publish your progress through GitHub and LinkedIn to build a public learning record.",
  },
  {
    icon: TrendingUp,
    title: "Grow Through Consistency",
    description:
      "Small daily progress compounds into lasting skills, confidence, and momentum.",
  },
];

export function WhyConsistent() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto w-full max-w-md px-5 sm:max-w-3xl sm:px-8">
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            The habit loop
          </span>
          <h2 className="mt-3 text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl">
            Why Students Stay Consistent
          </h2>
          <p className="mx-auto mt-3 max-w-[20rem] text-[15px] leading-relaxed text-muted-foreground sm:max-w-md">
            The challenge is designed around simple daily habits that are easy to
            keep and hard to fake.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated sm:p-6"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                <Icon className="size-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
