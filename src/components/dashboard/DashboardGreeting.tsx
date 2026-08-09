import { useEffect, useState } from "react";

function greetingFor(hour: number) {
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export function DashboardGreeting({
  headline = "Builder.",
  sub = "You've got one thing to ship today.",
}: {
  headline?: string;
  sub?: string;
}) {
  const [greeting, setGreeting] = useState("Good evening");

  useEffect(() => {
    setGreeting(greetingFor(new Date().getHours()));
  }, []);

  return (
    <div className="relative overflow-hidden pt-8 pb-6">
      <div className="animate-rise" style={{ animationDelay: "40ms" }}>
        <h1 className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground">
          {greeting}, {headline}
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
          {sub}
        </p>
      </div>
    </div>
  );
}
