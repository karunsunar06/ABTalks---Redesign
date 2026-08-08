import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardGreeting } from "@/components/dashboard/DashboardGreeting";
import { StreakXP } from "@/components/dashboard/StreakXP";
import { TodaysBuild } from "@/components/dashboard/TodaysBuild";
import { ProgressCarousel } from "@/components/dashboard/ProgressCarousel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentAchievement } from "@/components/dashboard/RecentAchievement";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { WaveBackground } from "@/components/WaveBackground";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Your Dashboard — ABTalks 60-Day AI Challenge" },
      {
        name: "description",
        content:
          "Continue today's AI build, track your portfolio, skills and achievements, and keep your 60-day streak alive.",
      },
      { property: "og:title", content: "Your ABTalks Dashboard" },
      {
        property: "og:description",
        content: "Today's build, your portfolio, skills and streak — all in one calm place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const [celebrate, setCelebrate] = useState(false);

  const handleShipped = () => {
    setCelebrate(false);
    requestAnimationFrame(() => setCelebrate(true));
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <WaveBackground className="h-[420px]" />
      <div className="mx-auto w-full max-w-md px-5 pb-28 sm:max-w-xl">
        <DashboardGreeting />
        <div className="space-y-7">
          <StreakXP celebrate={celebrate} />
          <TodaysBuild onShipped={handleShipped} />
          <ProgressCarousel />
          <QuickActions />
          <RecentAchievement />
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
