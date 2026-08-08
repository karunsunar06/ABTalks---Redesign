# ABTalks — AI Usage Log

This document records how AI-assisted tools were used during the design and development of the ABTalks hackathon project.

AI was used as a development and design assistant for ideation, UX exploration, interface generation, iteration, debugging, documentation, and deployment guidance.

The product direction, design decisions, scope, and final decisions were reviewed and guided throughout the development process.

---

# Phase 1 — Understanding the Product

## Goal

Understand what ABTalks should represent and what problem the redesign should solve.

## Product Direction

ABTalks is an AI-first career and learning ecosystem focused on helping high-school students, college students, and early professionals become industry-ready through practical AI education, building challenges, community-driven learning, and industry exposure.

The central idea became:

> Don't just learn AI. Build with it.

The product should help students avoid feeling left behind in the AI era by making AI learning practical, consistent, and approachable.

## AI Assistance

AI was used to explore:

- Target audience
- Student motivations
- The role of a 60-day challenge
- How ABTalks could differentiate itself from traditional learning platforms
- How to communicate the value of building instead of only consuming courses
- Product positioning and messaging

## Key Decision

The experience should focus on:

**Learn → Build → Ship → Share → Repeat**

rather than simply completing lessons.

---

# Phase 2 — Landing Page Direction

## Goal

Design the first experience for a student who has never heard of ABTalks.

The landing page needed to provide:

- Trust
- Clarity
- Motivation
- A clear explanation of the 60-day challenge
- A strong reason to start

## AI Assistance

AI was used to explore:

- Landing page structure
- Hero messaging
- CTA wording
- Trust sections
- Mobile-first layout
- Visual hierarchy
- Product positioning

## Key Design Decisions

The main headline became:

> Don't just learn AI.  
> Build with it.

The visual direction was intentionally:

- Clean
- Modern
- Mobile-first
- Easy on the eyes
- Premium but approachable
- Not childish
- Not overly corporate

The design avoided:

- Mascots
- Purple-heavy visuals
- Excessive gradients
- Excessive emojis
- Child-oriented illustrations

The primary visual language was built around:

- Light backgrounds
- Strong typography
- Teal accents
- Rounded cards
- Subtle motion
- Generous spacing

---

# Phase 3 — Trust & Product Explanation

## Goal

Help a first-time visitor understand why they should commit to a 60-day challenge.

## AI Assistance

AI was used to explore ways of communicating:

- Why the challenge exists
- What students actually do
- Why public proof of work matters
- How GitHub and LinkedIn contribute to the experience
- How consistency can help students build real portfolios

## Key Product Decision

ABTalks should not feel like a platform that simply tells students:

> "Complete another lesson."

Instead, the experience should communicate:

> "You have one thing to build today."

This became an important foundation for the dashboard experience.

---

# Phase 4 — Student Dashboard

## Goal

Create the student's home screen after entering ABTalks.

The dashboard needed to provide:

- Current streak
- Today's build
- Progress
- XP / experience
- Projects
- Skills
- GitHub activity
- Achievements
- Quick actions

## AI Assistance

AI was used to explore:

- Dashboard information hierarchy
- Mobile-first card layouts
- Progress visualization
- Motivational copy
- Personal achievement concepts
- Daily action prioritization

## Key Design Decision

The dashboard focuses on **personal progress instead of competition**.

Instead of emphasizing:

- Leaderboards
- Rankings
- Student comparison

the experience emphasizes:

**Projects → Skills → Streak → Achievements**

This was chosen to make the product motivating without making students feel like they are constantly competing with others.

## Core Dashboard Message

> You've got one thing to ship today.

This became the primary action-oriented message of the dashboard.

---

# Phase 5 — Product Scope & Hackathon Constraints

## Goal

Keep the implementation focused on the actual hackathon requirements.

## AI Assistance

AI was used to review the challenge requirements and identify what was necessary versus unnecessary.

## Explicitly Kept Out of Scope

The project intentionally does not require:

- Authentication
- Real user accounts
- Production database
- Recruiter dashboard
- Admin panel
- Real GitHub API verification
- Real LinkedIn API verification

Mocked data was used as permitted by the challenge.

## Key Decision

Limited implementation time and resources were prioritized toward the three required experiences:

```text
/
/dashboard
/day/12
