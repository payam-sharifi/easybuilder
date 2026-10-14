"use client";

import { Moon, Sun } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { useTheme } from "@/components/site/providers/theme-provider";
import { UI } from "@/lib/content";
import type { Theme } from "@/lib/theme";
import { cn } from "@/lib/cn";

/** Two-option pill with a sliding ink thumb; switching plays a circular wave. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const refs = useRef<Record<Theme, HTMLButtonElement | null>>({ light: null, dark: null });

  const pick = (next: Theme) => {
    if (next === theme) return;
    const r = refs.current[next]?.getBoundingClientRect();
    setTheme(next, r ? { x: r.left + r.width / 2, y: r.top + r.height / 2 } : undefined);
  };

  const options: { id: Theme; label: string; Icon: typeof Sun }[] = [
    { id: "light", label: t(UI.light), Icon: Sun },
    { id: "dark", label: t(UI.dark), Icon: Moon },
  ];

  return (
    <div
      role="group"
      aria-label={t(UI.theme)}
      className={cn(
        "relative inline-grid grid-cols-2 rounded-full border border-line-2 bg-surface p-1 text-[13px] font-semibold",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-y-1 start-1 w-[calc(50%-4px)] rounded-full bg-ink transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0.05,0.36,1)]"
        style={{ transform: theme === "dark" ? "translateX(calc(var(--dir, 1) * 100%))" : "none" }}
      />
      {options.map(({ id, label, Icon }) => {
        const active = theme === id;
        return (
          <button
            key={id}
            ref={(el) => {
              refs.current[id] = el;
            }}
            type="button"
            aria-pressed={active}
            onClick={() => pick(id)}
            className={cn(
              "focus-ring relative z-10 flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-full border-0 bg-transparent px-3.5 transition-colors duration-300",
              active ? "text-on-ink" : "text-muted",
            )}
          >
            <Icon className="size-3.5" aria-hidden />
            {label}
          </button>
        );
      })}
    </div>
  );
}
