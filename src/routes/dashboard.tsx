import { createFileRoute } from "@tanstack/react-router";
import { DashboardGreeting } from "@/components/dashboard/DashboardGreeting";
import { TodaysBuild } from "@/components/dashboard/TodaysBuild";
import { ProgressCarousel } from "@/components/dashboard/ProgressCarousel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { BottomNav } from "@/components/dashboard/BottomNav";

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
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="mx-auto w-full max-w-md px-5 pb-28 sm:max-w-xl">
        <DashboardGreeting />
        <div className="space-y-8">
          <TodaysBuild />
          <ProgressCarousel />
          <QuickActions />
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
