import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "ink" | "outline" | "cream";

const variants: Record<Variant, string> = {
  ink: "border-0 bg-ink text-on-ink shadow-[0_8px_20px_-14px_rgb(0_0_0/0.5)]",
  cream: "border-0 bg-ink text-on-ink",
  outline: "btn-outline border border-line-2 bg-card text-ink",
};

const sizes = {
  md: "h-[50px] rounded-[13px] px-[22px] text-[15px]",
  lg: "h-[52px] rounded-[14px] px-6 text-[15px]",
  sm: "h-10 rounded-[11px] px-4 text-sm",
  form: "h-[46px] rounded-xl px-[22px] text-[15px]",
};

type Common = {
  variant?: Variant;
  size?: keyof typeof sizes;
  /** Sliding arrow. */
  arrow?: boolean;
  children: ReactNode;
  className?: string;
};

function Arrow({ size }: { size: number }) {
  return (
    <ArrowRight
      width={size}
      height={size}
      strokeWidth={2.6}
      aria-hidden
    />
  );
}

function Inner({ arrow, children }: { arrow?: boolean; children: ReactNode }) {
  if (!arrow) return <>{children}</>;
  return (
    <>
      <span className="ba-ic ba-l">
        <Arrow size={16} />
      </span>
      <span>{children}</span>
      <span className="ba-ic ba-r">
        <Arrow size={16} />
      </span>
    </>
  );
}

function classes({ variant = "ink", size = "md", arrow, className }: Common) {
  return cn(
    "focus-ring inline-flex cursor-pointer items-center justify-center whitespace-nowrap font-semibold no-underline transition-[transform,opacity] duration-[250ms] disabled:cursor-not-allowed disabled:opacity-40",
    arrow && "btn-arrow",
    variants[variant],
    sizes[size],
    className,
  );
}

export function LinkButton(props: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { variant, size, arrow, className, children, ...rest } = props;
  return (
    <a className={classes({ variant, size, arrow, className, children })} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </a>
  );
}

export function Button(props: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { variant, size, arrow, className, children, type = "button", ...rest } = props;
  return (
    <button type={type} className={classes({ variant, size, arrow, className, children })} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  );
}
