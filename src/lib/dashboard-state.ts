import { useEffect, useState } from "react";

export type DashboardStateKey = "active" | "first-day" | "missed";

export type DashboardMock = {
  key: DashboardStateKey;
  greeting: {
    headline: string;
    sub: string;
  };
  notice?: {
    title: string;
    body: string;
  };
  streak: number;
  streakNote: string;
  xp: number;
  level: number;
  levelTitle: string;
  xpIntoLevel: number;
  completedDays: number;
  lastMissedDay?: number;
  projects: number;
  ctaLabel: string;
  skills: {
    name: string;
    level: string;
    value: number;
  }[];
  achievements: {
    name: string;
    note: string;
    icon: "rocket" | "flame" | "globe" | "sparkles";
  }[];
  achievementsUnlocked: number;
  recent?: {
    name: string;
    note: string;
  };
};

const activeSkills: DashboardMock["skills"] = [
  { name: "Python", level: "Strong", value: 82 },
  { name: "LLMs", level: "Advancing", value: 68 },
  { name: "Prompt Engineering", level: "Advancing", value: 61 },
  { name: "Machine Learning", level: "Building", value: 38 },
];

export const DASHBOARD_STATES: Record<
  DashboardStateKey,
  DashboardMock
> = {
  active: {
    key: "active",
    greeting: {
      headline: "Builder.",
      sub: "You've got one thing to ship today.",
    },
    streak: 7,
    streakNote: "Keep it moving today.",
    xp: 1240,
    level: 6,
    levelTitle: "Builder",
    xpIntoLevel: 62,
    completedDays: 11,
    projects: 27,
    ctaLabel: "Continue Building",
    skills: activeSkills,
    achievements: [
      {
        name: "First Ship",
        note: "Day 1 project pushed",
        icon: "rocket",
      },
      {
        name: "Streak Keeper",
        note: "21 days unbroken",
        icon: "flame",
      },
      {
        name: "Public Builder",
        note: "10 projects shared",
        icon: "globe",
      },
      {
        name: "Deep Diver",
        note: "First LLM fine-tune",
        icon: "sparkles",
      },
    ],
    achievementsUnlocked: 4,
    recent: {
      name: "First Project Shipped",
      note: "Completed your first real-world build.",
    },
  },

  "first-day": {
    key: "first-day",
    greeting: {
      headline: "Builder.",
      sub: "Your journey starts here.",
    },
    notice: {
      title: "Your journey starts here.",
      body: "One build is all it takes to begin.",
    },
    streak: 0,
    streakNote: "One build is all it takes to begin.",
    xp: 0,
    level: 1,
    levelTitle: "Newcomer",
    xpIntoLevel: 0,
    completedDays: 0,
    projects: 0,
    ctaLabel: "Start Building",
    skills: [
      { name: "Python", level: "Not started", value: 0 },
      { name: "LLMs", level: "Not started", value: 0 },
      {
        name: "Prompt Engineering",
        level: "Not started",
        value: 0,
      },
      {
        name: "Machine Learning",
        level: "Not started",
        value: 0,
      },
    ],
    achievements: [],
    achievementsUnlocked: 0,
  },

  missed: {
    key: "missed",
    greeting: {
      headline: "Builder.",
      sub: "Today is a good day to pick it back up.",
    },
    notice: {
      title: "Yesterday got away from you.",
      body: "Your streak reset, but your progress didn't. Start rebuilding today.",
    },
    streak: 0,
    streakNote: "Rebuild starts with today.",
    xp: 980,
    level: 5,
    levelTitle: "Apprentice",
    xpIntoLevel: 34,
    completedDays: 9,
    lastMissedDay: 11,
    projects: 14,
    ctaLabel: "Start Today's Build",
    skills: activeSkills,
    achievements: [
      {
        name: "First Ship",
        note: "Day 1 project pushed",
        icon: "rocket",
      },
      {
        name: "Public Builder",
        note: "10 projects shared",
        icon: "globe",
      },
    ],
    achievementsUnlocked: 2,
    recent: {
      name: "Public Builder",
      note: "You shared your 10th project.",
    },
  },
};

/**
 * Dev-only state switching:
 * /dashboard?state=first-day
 * /dashboard?state=missed
 *
 * Production default is always the active state.
 */
/**
 * Dev-only state switching:
 * /dashboard?state=first-day
 * /dashboard?state=missed
 *
 * Production default is always the active state.
 */
export function useDashboardMock(): DashboardMock {
  const [key, setKey] = useState<DashboardStateKey>("active");

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("state");

    if (
      value === "first-day" ||
      value === "missed" ||
      value === "active"
    ) {
      setKey(value);
    }
  }, []);

  return DASHBOARD_STATES[key];
}
