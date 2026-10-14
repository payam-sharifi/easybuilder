"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { UI } from "@/lib/content";
import { cn } from "@/lib/cn";
import { SITES, type SiteId } from "./sites";

/** macOS-ish window chrome used for every site preview. */
export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-line-2 bg-chrome shadow-[0_30px_60px_-30px_rgb(0_0_0/0.45)]",
        className,
      )}
    >
      <div className="flex h-9 shrink-0 items-center gap-3 border-b border-line px-3.5" dir="ltr">
        <span className="flex gap-1.5" aria-hidden>
          <i className="size-2.5 rounded-full bg-[#ff5f57] shadow-[inset_0_0_0_0.5px_rgb(0_0_0/0.18)]" />
          <i className="size-2.5 rounded-full bg-[#febc2e] shadow-[inset_0_0_0_0.5px_rgb(0_0_0/0.18)]" />
          <i className="size-2.5 rounded-full bg-[#28c840] shadow-[inset_0_0_0_0.5px_rgb(0_0_0/0.18)]" />
        </span>
        <span className="mx-auto flex h-[22px] w-[58%] max-w-[300px] items-center justify-center truncate rounded-md bg-bg/70 px-3 font-mono text-[10.5px] text-muted-2">
          {url}
        </span>
        <span className="w-[42px]" aria-hidden />
      </div>
      {children}
    </div>
  );
}

/**
 * Renders a demo site on a 1000px canvas, scaled to fit its container's width.
 * With `scroll`, the page slowly scrolls top → bottom → top like a screen recording.
 */
export function SiteScreen({
  id,
  scroll = false,
  paused = false,
  className,
}: {
  id: SiteId;
  scroll?: boolean;
  paused?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [m, setM] = useState({ s: 0.5, h: 400 });
  const [visible, setVisible] = useState(true);
  const { Component, designHeight } = SITES[id];

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setM({ s: el.clientWidth / 1000, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Don't animate when offscreen.
  useEffect(() => {
    const el = ref.current;
    if (!el || !scroll) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, [scroll]);

  const style = {
    height: designHeight * m.s,
    "--frame-h": `${m.h}px`,
    animationPlayState: paused || !visible ? "paused" : "running",
  } as CSSProperties;

  return (
    <div ref={ref} dir="ltr" className={cn("relative min-h-0 overflow-hidden bg-bg", className)} aria-hidden>
      <div className={scroll ? "animate-site-scroll will-change-transform" : ""} style={style}>
        <div
          className="site-canvas pointer-events-none select-none"
          style={{
            width: 1000,
            height: designHeight,
            transform: `scale(${m.s})`,
            transformOrigin: "top left",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          <Component />
        </div>
      </div>
    </div>
  );
}

/**
 * Muted looping screen recording. Plays only while on screen, never autoplays for
 * visitors who prefer reduced motion, and can be paused with a click.
 */
export function VideoScreen({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const { t } = useLanguage();
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    const v = video.current;
    if (!el || !v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) userPaused.current = true;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !userPaused.current) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  return (
    <div ref={wrap} className={cn("relative aspect-[1280/600] overflow-hidden bg-[#1b1c24]", className)}>
      <video
        ref={video}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onClick={toggle}
        className="block size-full cursor-pointer object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? t(UI.pause) : t(UI.play)}
        className={cn(
          "focus-ring absolute bottom-3 end-3 grid size-9 cursor-pointer place-items-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur transition-opacity duration-300",
          playing ? "opacity-0 hover:opacity-100 focus-visible:opacity-100" : "opacity-100",
        )}
      >
        {playing ? <Pause className="size-4" aria-hidden /> : <Play className="size-4" aria-hidden />}
      </button>
    </div>
  );
}
