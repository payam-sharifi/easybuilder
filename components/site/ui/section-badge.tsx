import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** The outlined "pill" label that sits above every section title. */
export function SectionBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-[10px] border-[1.5px] border-ink px-3.5 py-[7px] text-sm font-semibold tracking-[-0.01em] text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}
