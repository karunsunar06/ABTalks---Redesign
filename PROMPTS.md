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

## Prompt 2.1

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

## Prompt 2.2

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



##
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
- Empty projects/achievements
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


---

## Phase 9 — Dashboard State Logic

### Goal

Make the dashboard state system work correctly in the production code while keeping the normal dashboard unchanged.

### AI Tool

ChatGPT

### Prompt / Assistance

Implemented the dashboard mock-state logic using TypeScript and React.

The dashboard supports three states:

- `active`
- `first-day`
- `missed`

The state data includes:

- Streak
- XP
- Level
- Completed days
- Projects
- Skills
- Achievements
- State-specific messaging
- Today's CTA

Query parameters are used for development/testing:

`/dashboard?state=active`

`/dashboard?state=first-day`

`/dashboard?state=missed`

The active state remains the default when no state parameter is provided.

### Result

The dashboard state system was implemented and manually tested.

The first-day state correctly shows:

- 0 streak
- 0 XP
- 0 projects
- No achievements
- Newcomer status
- Start Building CTA

The missed-day state correctly shows:

- 0 streak
- Previous XP/progress preserved
- Recovery messaging
- Today's build still available

The normal `/dashboard` route continues to display the active student state.

### Human / Manual Decisions

The state system was kept intentionally mocked because the hackathon submission focuses on the product experience rather than implementing authentication, databases, or persistent user accounts.

---

## Phase 10 — Day 12 Submission Flow

### Goal

Complete the Day 12 challenge experience so the student can move through the full:

**Build → Prove → Ship**

flow.

### AI Tool

ChatGPT

### Prompt / Assistance

Reviewed and refined the existing `/day/12` route to support GitHub proof, LinkedIn proof, and a post-submission shipped state.

The page was kept focused on the existing design rather than introducing a new visual system.

### Result

The Day 12 page now includes:

- Challenge description
- Skills being practiced
- Build requirements
- Expandable hint section
- GitHub proof input
- LinkedIn proof input
- Submission CTA
- "Build Shipped" confirmation
- Continue Building CTA back to the dashboard

Both GitHub and LinkedIn proof fields must be added before the submission button becomes active.

### Human / Manual Decisions

The proof verification and progress persistence remain mocked for the prototype.

The goal was to demonstrate the complete student journey without spending remaining development time implementing backend infrastructure.

---

## Phase 11 — Documentation & Submission Preparation

### Goal

Prepare the repository for hackathon submission and document the AI-assisted development process.

### AI Tool

ChatGPT

### Work Completed

Updated the project documentation to clearly communicate:

- Product idea
- Core routes
- Dashboard states
- Day 12 challenge
- Proof-of-work flow
- Technology stack
- AI-assisted development
- Deployment
- Current prototype limitations

The README and `PROMPTS.md` were updated to make the development process and project scope easier for judges to understand.

### Deployment Workflow

The final development workflow is:

**AI-assisted development → GitHub → Vercel → Production**

Simple code and documentation changes are handled directly through GitHub when possible, while Lovable is reserved for high-value frontend and visual work.

### Human Review

The final implementation is manually reviewed before submission.

AI-generated code and suggestions are treated as development assistance rather than automatically accepted output.
