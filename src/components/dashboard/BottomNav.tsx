import { Home, LayoutGrid, BookOpen, User } from "lucide-react";

const items = [
  { label: "Home", icon: Home, active: true },
  { label: "Challenges", icon: LayoutGrid, active: false },
  { label: "Resources", icon: BookOpen, active: false },
  { label: "Profile", icon: User, active: false },
];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-card/90 backdrop-blur-xl">
      <ul className="mx-auto flex w-full max-w-md items-stretch px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
        {items.map(({ label, icon: Icon, active }) => (
          <li key={label} className="flex-1">
            <button
              aria-current={active ? "page" : undefined}
              className={`flex w-full flex-col items-center gap-1 rounded-xl py-2 transition-all duration-200 active:scale-[0.94] ${
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="size-[19px]" strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-semibold tracking-tight">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
