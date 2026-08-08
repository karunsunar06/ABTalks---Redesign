import { useEffect, useState } from "react";

function greetingFor(hour: number) {
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export function DashboardGreeting() {
  const [greeting, setGreeting] = useState("Good Evening");

  useEffect(() => {
    setGreeting(greetingFor(new Date().getHours()));
  }, []);

  return (
    <div className="relative overflow-hidden pt-8 pb-6">
      {/* extremely subtle animated mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-28 left-[-18%] size-72 rounded-full bg-accent/[0.07] blur-[90px] animate-blob-drift" />
        <div className="absolute -top-12 right-[-22%] size-64 rounded-full bg-accent/[0.05] blur-[95px] animate-mesh-shift" />
        <div className="absolute top-24 left-1/3 size-52 rounded-full bg-chart-3/[0.05] blur-[80px] animate-blob-drift-slow" />
      </div>

      <div className="animate-rise" style={{ animationDelay: "40ms" }}>
        <h1 className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground">
          {greeting} <span className="align-middle">👋</span>
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
          Today&apos;s build is waiting.
        </p>
      </div>
    </div>
  );
}
