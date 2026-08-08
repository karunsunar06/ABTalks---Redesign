/**
 * Extremely subtle white -> mint/teal flowing background signature.
 * Purely decorative, sits behind content, respects reduced motion.
 */
export function WaveBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <svg
        className="absolute inset-x-[-15%] top-[-10%] h-[70%] w-[130%] animate-wave-flow opacity-60"
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 220C120 140 240 300 400 240s280-140 400-40v240H0Z"
          fill="var(--accent-soft)"
          fillOpacity="0.85"
        />
      </svg>
      <svg
        className="absolute inset-x-[-20%] top-[6%] h-[64%] w-[140%] animate-wave-flow-slow opacity-50"
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 260C160 320 260 160 420 200s260 160 380 60v180H0Z"
          fill="var(--accent)"
          fillOpacity="0.06"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}