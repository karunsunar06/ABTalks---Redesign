import { useEffect, useState } from "react";

function greetingFor(hour: number) {
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

export function DashboardGreeting() {
  const [greeting, setGreeting] = useState("Good Evening");

  useEffect(() => {
    setGreeting(greetingFor(new Date().getHours()));
  }, []);

  return (
    <div className="relative overflow-hidden pt-9 pb-7">
      {/* very subtle animated mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]">
        <div className="absolute -top-24 left-[-15%] size-64 rounded-full bg-accent/8 blur-[90px] animate-blob-drift" />
        <div className="absolute -top-8 right-[-20%] size-56 rounded-full bg-accent/6 blur-[95px] animate-blob-drift-slow" />
        <div className="absolute top-20 left-1/3 size-48 rounded-full bg-accent/5 blur-[80px] animate-blob-drift-alt" />
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
