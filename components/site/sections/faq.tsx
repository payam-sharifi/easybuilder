"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import { FAQ_COPY, HOME_FAQS, type FaqItem } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Faq({
  items = HOME_FAQS,
  sub = FAQ_COPY.subtitle,
}: {
  items?: FaqItem[];
  sub?: (typeof FAQ_COPY)["subtitle"];
}) {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <section id="faq" className="relative bg-bg py-[clamp(72px,10vw,130px)]">
      <div className="mx-auto max-w-[860px] px-5 sm:px-8">
        <SectionHead badge={FAQ_COPY.badge} title={FAQ_COPY.title} sub={sub} />

        <Reveal delay={0.1} className="mt-14 border-t border-line-2">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-line-2">
                <h3 className="m-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${uid}-p${i}`}
                    id={`${uid}-b${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="focus-ring group flex w-full cursor-pointer items-center justify-between gap-6 border-0 bg-transparent py-6 text-start text-[clamp(17px,1.8vw,21px)] font-medium tracking-[-0.01em] text-ink"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">{t(f.q)}</span>
                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300",
                        isOpen ? "rotate-45 border-ink bg-ink text-on-ink" : "border-line-2 text-ink group-hover:border-ink",
                      )}
                    >
                      <Plus className="size-[18px]" aria-hidden />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`${uid}-p${i}`}
                      role="region"
                      aria-labelledby={`${uid}-b${i}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="m-0 max-w-[720px] pb-7 pe-12 text-base leading-[1.7] text-muted">{t(f.a)}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
