import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABTalks — 60-Day AI Building Challenge for Students" },
      {
        name: "description",
        content:
          "Build one real AI project every day for 60 days. Keep a GitHub streak, grow a public portfolio, and become industry-ready with ABTalks.",
      },
      { property: "og:title", content: "ABTalks — 60-Day AI Building Challenge" },
      {
        property: "og:description",
        content:
          "Don't just learn AI. Build with it. 60 days, 60 projects, one real portfolio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
    </main>
  );
}
