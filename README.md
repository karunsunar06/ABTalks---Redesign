# ABTalks — AI Building Challenge

> **Don't just learn AI. Build with it.**

ABTalks is an AI-first career and learning ecosystem focused on helping high-school students, college students, and early professionals become more industry-ready through practical AI education, building challenges, community-driven learning, and exposure to the real AI ecosystem.

This project is a mobile-first redesign of the ABTalks 60-Day AI Building Challenge, created for the ABTalks Vibe Code Hackathon.

---

## The Idea

The AI era is moving quickly, and many students are worried about being left behind.

ABTalks turns learning into a simple daily habit:

**Learn → Build → Ship → Share → Repeat**

Students choose a learning/building track and work on practical projects throughout the challenge.

Each day's progress can become public proof of work through:

- GitHub commits
- LinkedIn posts
- Personal projects
- Skills developed
- Achievements earned

The goal isn't to compete with other students.

The goal is to help each student keep moving forward.

---

## What We Built

The redesign focuses on three core experiences:

### 1. Landing Page

**Route:** `/`

The first experience for a student discovering ABTalks.

It communicates:

- What ABTalks is
- Why practical AI building matters
- What the 60-day challenge means
- Why consistency matters
- What students can gain from participating

The visual direction is intentionally clean, modern, mobile-first, and easy on the eyes.

---

### 2. Student Dashboard

**Route:** `/dashboard`

The dashboard is designed as the student's daily home.

It includes:

- Current streak
- XP / personal progress
- Today's recommended build
- Project portfolio
- GitHub activity
- Learning / skill progress
- Quick actions
- Personal achievements
- Public profile

The dashboard intentionally focuses on **personal progress rather than leaderboards or student-to-student competition**.

The core message is:

> **You've got one thing to ship today.**

---

### 3. Challenge Day

**Route:** `/day/12`

The Challenge Day experience is designed around completing one practical build.

Students can:

- Understand the day's challenge
- Read what they are expected to build
- Understand the skills involved
- Follow the requirements
- Access useful guidance/resources
- Submit GitHub proof of work
- Submit LinkedIn proof of work
- Complete the day's challenge

The page is designed to keep the student focused and avoid unnecessary scrolling.

---

# Route Map

The required routes are:

```text
/
/dashboard
/day/12

# Route Map

The required routes are:

```text
/
/dashboard
/day/12
Dashboard States

The dashboard supports three intentional student states:

Active — a student currently maintaining their progress
First Day — a new student with 0 streak, 0 XP, no projects, and no achievements
Missed Day — a student who missed a day, with their streak reset while their previous progress remains

For development/testing, these states can be previewed with:

/dashboard?state=active
/dashboard?state=first-day
/dashboard?state=missed

The production dashboard defaults to the active state.

Day 12 — AI Resume Analyzer

Day 12 challenges the student to build an AI-powered resume analyzer.

The build focuses on:

LLM APIs
Prompt Engineering
Structured Output

Students are expected to:

Accept resume text or a resume file
Extract important skills and experience
Identify strengths and missing skills
Generate actionable improvement suggestions

The challenge also demonstrates the complete build → prove → ship flow.

Proof of Work

Students can add:

GitHub repository or commit proof
LinkedIn post proof

Once both proofs are added, the student can submit the build and receive a Build Shipped confirmation.

The current implementation is a frontend prototype, so proof verification and progress persistence are mocked rather than connected to a backend.

Technology
React
TypeScript
TanStack Start
TanStack Router
Tailwind CSS
Lucide React
Vite
GitHub
Vercel
AI-Assisted Development

AI was used throughout the development process for product exploration, UI development, component implementation, routing, debugging, refactoring, and documentation.

The development process is documented in:

PROMPTS.md — major prompts and AI interactions
AI_LOG.md — development decisions and AI-assisted workflow

The final implementation was reviewed and adapted during development rather than being accepted as unmodified AI output.

Deployment

The project is deployed on Vercel from the main branch.

Live: https://ab-talks-redesign-rho.vercel.app/

Current Scope

This submission focuses on the core product experience and prototype flow.

The following are currently frontend/mock implementations:

Authentication
Persistent user accounts
Database
Real GitHub verification
Real LinkedIn verification
Persistent streak updates
Persistent challenge submissions
