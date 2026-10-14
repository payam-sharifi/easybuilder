"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { BRAND_LOGO, UI } from "@/lib/content";

const KEY = "ewb-preloaded";

/** Flip-cube logo + progress bar. Plays once per browser session, then curtains up. */
export function Preloader() {
  const { t } = useLanguage();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
      sessionStorage.setItem(KEY, "1");
    } catch {}
    const id = window.setTimeout(() => setShow(false), seen ? 0 : 1250);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="preloader"
          role="status"
          aria-label={t(UI.loading)}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-7 bg-bg"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="hp-flip">
            <div className="hp-spin">
              <div className="hp-face border border-line-2 bg-card">
                <Image src={BRAND_LOGO} alt="" width={44} height={44} priority className="size-11 object-contain" unoptimized />
              </div>
              <div className="hp-face hp-back border border-line-2 bg-card">
                <Image src={BRAND_LOGO} alt="" width={44} height={44} priority className="size-11 object-contain" unoptimized />
              </div>
            </div>
          </div>
          <div className="h-[3px] w-40 overflow-hidden rounded-full bg-line-2">
            <motion.div
              className="h-full w-full origin-left rounded-full bg-ink rtl:origin-right"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
