# AI Usage Log (PROMPTS.md)

This file documents the AI prompts used during the development of this project as part of the ABTalks Vibe Coding Hackathon.

## Prompt 1

**Tool:** Lovable

**Feature:** Landing Page - Hero Section

**Prompt:**
Design the hero section of a mobile-first landing page for ABTalks, focusing on trust, clarity, and motivating students to join a 60-day AI building challenge. The design should be modern, premium, and beginner-friendly, with a product-first approach and strong visual hierarchy.

**Outcome:**
Generated the initial hero section design, which was later refined based on UX and branding decisions.
# AI Usage Log (PROMPTS.md)

This document records the AI-assisted development process used to build the ABTalks redesign during the hackathon.

---

## Prompt 1

**Date:** 2026-08-07

**Tool:** ChatGPT (GPT-5.5)

**Feature:** Product Strategy

**Purpose:**
Define the product vision, target audience, user journey, and overall design direction before beginning development.

**Prompt:**
Help me understand ABTalks as a product, identify its target audience, define its mission, and plan the landing page experience before writing any code.

**Outcome:**
Used the discussion to define the brand message, target audience, landing page structure, and UX priorities.

---

## Prompt 2

**Date:** 2026-08-07

**Tool:** ChatGPT (GPT-5.5)

**Feature:** Landing Page Hero

**Purpose:**
Plan the hero section and messaging hierarchy.

**Prompt:**
Design a high-converting mobile-first hero section for ABTalks. Focus on messaging, CTA hierarchy, trust indicators, and a product-first approach.

**Outcome:**
Defined the hero layout, headline, CTA strategy, and dashboard preview concept.

---


## Prompt 3

**Tool:** Lovable

**Feature:** Landing Page Hero

**Purpose:**
Generate the first version of the ABTalks landing page hero based on the approved product strategy.

**Outcome:**
Created a mobile-first hero with product messaging, CTA hierarchy, and a dashboard preview. The design was then reviewed and iteratively refined for stronger product positioning, trust, and clarity.



## Prompt 4

**Tool:** ChatGPT (GPT-5.5)

**Feature:** Landing Page Information Architecture

**Purpose:**
Plan the complete landing page flow after the hero section.

**Prompt:**
Help structure the landing page so that each section answers a specific user question and gradually convinces a first-time visitor to join the 60-day AI Building Challenge.

**Outcome:**
Defined the landing page flow:
- Hero
- Why Building Matters
- How It Works
- Challenge Tracks
- Student Transformation
- Final CTA


## Prompt 5

**Tool:** ChatGPT (GPT-5.5)

**Feature:** Landing Page Trust & Storytelling

**Purpose:**
Design the sections after the hero to build trust, communicate the mission, and motivate students to commit to the 60-day challenge.

**Prompt:**
Help structure the landing page so it builds trust through mission, values, expected outcomes, and a clear explanation of the challenge without relying on comparisons or aggressive marketing.

**Outcome:**
Planned the "What You'll Leave With", "What We Believe", "How the Challenge Works", and "Inside the Challenge" sections to create a cohesive, mission-driven user journey.



## Prompt 4

**Tool:** Lovable

**Feature:** Trust Section & Challenge Flow

**Purpose:**
Design a trust-building section and clearly explain the 60-day challenge flow.

**Prompt:**
Designed a landing page section that motivates students to commit by focusing on consistency, real projects, public learning, and a simple challenge flow.

**Outcome:**
Generated the "Why Students Stay Consistent" and "How the Challenge Works" sections, maintaining the product's mission-driven design language.


## Prompt 5

**Tool:** Lovable

**Feature:** Transformation Section

**Purpose:**
Help visitors visualize the outcome of completing the 60-day challenge.

**Prompt:**
Design a mobile-first section that illustrates the student's transformation from Day 1 to Day 60, emphasizing confidence, real projects, GitHub activity, and portfolio growth rather than a curriculum roadmap.

**Outcome:**
Created a visual transformation journey that reinforces the value of committing to the challenge.

## Prompt 6

**Tool:** Lovable

**Feature:** Dashboard Refinement

**Purpose:**
Refine the existing dashboard without changing its structure by improving typography


---

## Phase 7 — Dashboard Edge States & Motion

### Goal
Improve the `/dashboard` experience to explicitly handle the real-world states required by the hackathon brief:

- First-day student with no streak
- Missed-day student
- Empty projects / achievements
- A subtle visual motion treatment without redesigning the dashboard

### AI Tool
Lovable

### Prompt
Updated only the existing `/dashboard` page.

The existing dashboard visual language, typography, cards, spacing, teal accent, bottom navigation, and active state were preserved.

Added mocked dashboard states for:

1. Active user
2. First-day user
3. Missed-day user

The first-day state uses:
- 0 streak
- 0 XP
- 0 projects
- No achievements
- "Your journey starts here" messaging
- "Start Building" CTA
- Intentional empty project and achievement states

The missed-day state uses:
- 0 streak
- Previous progress preserved
- Supportive recovery messaging
- Today's build remains available

A subtle flowing SVG progress animation was also added with different visual paths for active, first-day, and missed-day states.

The states are controlled through mocked local data and query parameters for testing rather than adding a visible developer state selector to the normal student UI.

### Result
Lovable successfully implemented the requested edge states and visual motion.

The default `/dashboard` remains the normal active student experience.

The first-day state can be tested using:

`/dashboard?state=first-day`

The missed-day state can be tested using:

`/dashboard?state=missed`

### Verification
Verified that the first-day state renders correctly with:
- 0 streak
- 0 XP
- Newcomer state
- Empty projects
- Today's build still available

Verified that the implementation was committed to GitHub by Lovable.

### Credit / Workflow Note
This iteration consumed a significant portion of the remaining Lovable credits.

After this iteration, further development should prioritize direct GitHub code edits for simple logic, routing, mocked data, and bug fixes. Lovable should be reserved for high-value visual/frontend changes.

### Human / Manual Decisions
Reviewed the generated dashboard components and confirmed that:
- `DashboardNotice.tsx` handles state-specific messaging.
- `ProgressFlow.tsx` provides the subtle flowing animation.
- The existing active dashboard remains the default.
- No unnecessary redesign was introduced.

---

## Phase 8 — Deployment & Production Workflow

### Deployment
The project was connected to GitHub and deployed through Vercel.

Current workflow:

Lovable → GitHub → Vercel → Production

Vercel automatically deploys changes pushed to the `main` branch.

### Production URL
https://ab-talks-redesign-rho.vercel.app/

### Important Development Decision
Lovable is now being used primarily for:
- UI design
- visual improvements
- animations
- larger frontend design changes

GitHub/manual editing is being used for:
- routing
- simple React/TypeScript logic
- mocked data
- text changes
- bug fixes
- configuration
- documentation

This reduces dependence on AI generation credits while keeping the visual workflow efficient.
