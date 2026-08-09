/**
 * Subtle flowing line behind the streak / progress area.
 * "Your progress keeps moving." Decorative only.
 */
export function ProgressFlow({ variant = "active" }: { variant?: "active" | "first-day" | "missed" }) {
  const path =
    variant === "missed"
      ? "M0 34C60 34 96 12 132 40s72 26 108 4 84-22 160 10"
      : variant === "first-day"
        ? "M0 42C70 42 120 38 180 34s140 -8 220 -14"
        : "M0 40C60 14 110 58 170 34s110 -22 230 6";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-14 overflow-hidden">
      <svg
        className="animate-flow-line absolute bottom-0 left-0 h-full w-[200%]"
        viewBox="0 0 400 60"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d={path} stroke="var(--accent)" strokeOpacity="0.22" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d={path}
          transform="translate(400 0)"
          stroke="var(--accent)"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
