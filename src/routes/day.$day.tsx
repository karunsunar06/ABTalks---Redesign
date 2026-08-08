import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Github,
  Lightbulb,
  Linkedin,
  Signal,
  ChevronDown,
} from "lucide-react";
import { WaveBackground } from "@/components/WaveBackground";
import { BottomNav } from "@/components/dashboard/BottomNav";

export const Route = createFileRoute("/day/$day")({
  head: () => ({
    meta: [
      { title: "Day 12 · Build an AI Resume Analyzer — ABTalks" },
      {
        name: "description",
        content:
          "Today's focused build: an AI resume analyzer that extracts skills, spots gaps and suggests improvements. Submit your GitHub and LinkedIn proof to ship Day 12.",
      },
      { property: "og:title", content: "Day 12 · Build an AI Resume Analyzer" },
      {
        property: "og:description",
        content:
          "A 45-minute intermediate build using LLM APIs, prompt engineering and structured output.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DayPage,
});

const practice = ["LLM APIs", "Prompt Engineering", "Structured Output"];

const requirements = [
  "Accept resume text or a resume file.",
  "Extract important skills and experience.",
  "Identify strengths and missing skills.",
  "Generate actionable improvement suggestions.",
];

function DayPage() {
  const { day } = Route.useParams();
  const [hintOpen, setHintOpen] = useState(false);
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [githubAdded, setGithubAdded] = useState(false);
  const [linkedinAdded, setLinkedinAdded] = useState(false);
  const [shipped, setShipped] = useState(false);

  const ready = githubAdded && linkedinAdded;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <WaveBackground className="h-[360px]" />
      <div className="mx-auto w-full max-w-md px-5 pb-28 sm:max-w-xl">
        <header className="flex items-center justify-between gap-3 pt-6">
          <Link
            to="/dashboard"
            aria-label="Back to dashboard"
            className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-transform active:scale-95"
          >
            <ArrowLeft className="size-4" strokeWidth={2.4} />
          </Link>
          <h1 className="text-[13px] font-bold uppercase tracking-[0.22em] text-foreground">
            Day {day}
          </h1>
          <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold tabular-nums text-muted-foreground">
            {day} / 60
          </span>
        </header>

        <section className="animate-rise mt-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-build">
            Today&apos;s Build
          </p>
          <h2 className="mt-2 text-[1.6rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground">
            Build an AI Resume Analyzer
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-[11px] font-semibold text-secondary-foreground">
              <Clock className="size-3.5" strokeWidth={2.4} />
              45 min
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-[11px] font-semibold text-secondary-foreground">
              <Signal className="size-3.5" strokeWidth={2.4} />
              Intermediate
            </span>
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
            Build a simple AI-powered resume analyzer that identifies skills, strengths,
            missing skills, and gives actionable improvement suggestions.
          </p>
        </section>

        <section className="animate-rise mt-7" style={{ animationDelay: "80ms" }}>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            What you&apos;ll practice
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {practice.map((item) => (
              <span
                key={item}
                className="rounded-full bg-accent-soft px-3 py-1.5 text-[11px] font-semibold text-accent"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section
          className="animate-rise mt-7 rounded-3xl border border-border bg-card p-5 shadow-soft"
          style={{ animationDelay: "140ms" }}
        >
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Build this
          </h3>
          <ol className="mt-4 space-y-3.5">
            {requirements.map((req, i) => (
              <li key={req} className="flex gap-3">
                <span className="mt-0.5 text-[11px] font-bold tabular-nums tracking-tight text-build">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] leading-snug text-foreground">{req}</span>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="animate-rise mt-4 overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
          style={{ animationDelay: "180ms" }}
        >
          <button
            onClick={() => setHintOpen((v) => !v)}
            aria-expanded={hintOpen}
            className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
          >
            <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-foreground">
              <Lightbulb className="size-4 text-build" strokeWidth={2.2} />
              Need a hint?
            </span>
            <ChevronDown
              className={`size-4 text-muted-foreground transition-transform duration-300 ${hintOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ease-out ${hintOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <div className="px-5 pb-5">
                <p className="text-[13.5px] leading-relaxed text-muted-foreground">
                  Start with the core workflow first. Get the resume text into your
                  application, send it to the model with a structured prompt, then improve
                  the interface.
                </p>
                <button className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-accent">
                  View resources
                  <ArrowRight className="size-3.5" strokeWidth={2.4} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-rise mt-7" style={{ animationDelay: "220ms" }}>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Proof of work
          </h3>

          <ProofCard
            icon={<Github className="size-4" strokeWidth={2.2} />}
            title="Show what you built"
            placeholder="Paste GitHub repository or commit URL"
            action="Verify GitHub"
            value={github}
            onChange={setGithub}
            added={githubAdded}
            addedLabel="GitHub proof added"
            onSubmit={() => github.trim() && setGithubAdded(true)}
          />

          <ProofCard
            icon={<Linkedin className="size-4" strokeWidth={2.2} />}
            title="Share your progress"
            placeholder="Paste LinkedIn post URL"
            action="Add LinkedIn Post"
            value={linkedin}
            onChange={setLinkedin}
            added={linkedinAdded}
            addedLabel="LinkedIn proof added"
            onSubmit={() => linkedin.trim() && setLinkedinAdded(true)}
          />
        </section>

        <section className="animate-rise mt-7" style={{ animationDelay: "260ms" }}>
          {shipped ? (
            <div className="animate-check-in rounded-3xl border border-border bg-card p-6 text-center shadow-elevated">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-build-soft text-build">
                <Check className="size-5" strokeWidth={3} />
              </span>
              <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.18em] text-foreground">
                Build shipped
              </p>
              <p className="mt-1.5 text-[13.5px] text-muted-foreground">
                Day {day} has been added to your progress.
              </p>
              <Link
                to="/dashboard"
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-6 text-[15px] font-semibold text-background transition-transform duration-200 active:scale-[0.97]"
              >
                Continue Building
                <ArrowRight className="size-4" strokeWidth={2.4} />
              </Link>
            </div>
          ) : (
            <>
              <button
                disabled={!ready}
                onClick={() => setShipped(true)}
                style={ready ? { backgroundColor: "var(--build)" } : undefined}
                className={`inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl px-6 text-[15px] font-semibold transition-all duration-200 ${
                  ready
                    ? "text-background shadow-elevated active:scale-[0.97]"
                    : "cursor-not-allowed bg-secondary text-muted-foreground"
                }`}
              >
                Submit Today&apos;s Build
                <ArrowRight className="size-4" strokeWidth={2.4} />
              </button>
              <p
                className={`mt-3 text-center text-[12.5px] font-medium ${ready ? "text-accent" : "text-muted-foreground"}`}
              >
                {ready
                  ? "✓ Ready to ship"
                  : "Add your GitHub and LinkedIn proof to complete today's build."}
              </p>
            </>
          )}
        </section>
      </div>
      <BottomNav />
    </main>
  );
}

function ProofCard({
  icon,
  title,
  placeholder,
  action,
  value,
  onChange,
  added,
  addedLabel,
  onSubmit,
}: {
  icon: React.ReactNode;
  title: string;
  placeholder: string;
  action: string;
  value: string;
  onChange: (v: string) => void;
  added: boolean;
  addedLabel: string;
  onSubmit: () => void;
}) {
  return (
    <div className="mt-3 rounded-3xl border border-border bg-card p-5 shadow-soft transition-colors">
      <div className="flex items-center gap-2.5">
        <span className="inline-flex size-8 items-center justify-center rounded-xl bg-secondary text-foreground">
          {icon}
        </span>
        <p className="text-[14px] font-semibold tracking-tight text-foreground">{title}</p>
      </div>

      {added ? (
        <p className="animate-check-in mt-4 inline-flex items-center gap-2 rounded-2xl bg-accent-soft px-3.5 py-2.5 text-[13px] font-semibold text-accent">
          <Check className="size-3.5" strokeWidth={3} />
          {addedLabel}
        </p>
      ) : (
        <div className="mt-4 space-y-2.5">
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            inputMode="url"
            className="h-11 w-full rounded-2xl border border-input bg-background px-3.5 text-[13.5px] text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/40"
          />
          <button
            onClick={onSubmit}
            style={{ backgroundColor: "var(--build-soft)", color: "var(--build)" }}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl text-[13px] font-semibold transition-transform active:scale-[0.98]"
          >
            {action}
            <ArrowRight className="size-3.5" strokeWidth={2.6} />
          </button>
        </div>
      )}
    </div>
  );
}
