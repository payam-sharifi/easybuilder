'use client';

import { CheckCheck, Mic, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { BrandLogo } from '@/components/BrandLogo';

export type ChatDemoMessage = { from: 'user' | 'agent'; text: string };

type ChatDemoProps = {
  label: string;
  status: string;
  typingLabel: string;
  placeholder: string;
  messages: ChatDemoMessage[];
};

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Phone-sized chat that "plays" a conversation the way a real person would:
 * the user types letter by letter into the input bar, sends, then the agent
 * shows "typing…" before its reply appears. Loops while on screen.
 */
export function ChatDemo({ label, status, typingLabel, placeholder, messages }: ChatDemoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [shown, setShown] = useState(0);
  const [draft, setDraft] = useState('');
  const [agentTyping, setAgentTyping] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShown(messages.length);
      return;
    }

    let cancelled = false;

    (async () => {
      while (!cancelled) {
        setShown(0);
        setDraft('');
        setAgentTyping(false);
        await wait(900);

        for (let i = 0; i < messages.length; i++) {
          const message = messages[i];

          if (message.from === 'user') {
            for (let c = 1; c <= message.text.length; c++) {
              if (cancelled) return;
              setDraft(message.text.slice(0, c));
              await wait(32 + Math.random() * 38);
            }
            await wait(450);
            if (cancelled) return;
            setDraft('');
            setShown(i + 1);
            await wait(700);
          } else {
            setAgentTyping(true);
            await wait(1400 + Math.random() * 500);
            if (cancelled) return;
            setAgentTyping(false);
            setShown(i + 1);
            await wait(1100);
          }
        }

        await wait(5000);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [inView, messages]);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto h-[600px] w-full max-w-[300px] rounded-[2.75rem] bg-brand-dark p-2.5 shadow-2xl shadow-brand-dark/30"
    >
      {/* Dynamic island */}
      <span
        className="absolute start-1/2 top-4 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-brand-dark"
        aria-hidden
      />

      <div className="flex h-full flex-col overflow-hidden rounded-[2.25rem] bg-white text-ink">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-brand/10 bg-white px-4 pb-3 pt-9">
          <BrandLogo size={36} />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-semibold">{label}</p>
            <p
              className={`flex items-center gap-1.5 text-xs ${
                agentTyping ? 'font-medium text-[#1da851]' : 'text-muted'
              }`}
            >
              {agentTyping ? null : (
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" aria-hidden />
              )}
              {agentTyping ? typingLabel : status}
            </p>
          </div>
        </div>

        {/* Messages: newest stay at the bottom, older ones scroll out of view */}
        <div className="flex min-h-0 flex-1 flex-col justify-end gap-2 overflow-hidden bg-brand-soft/50 px-3 py-4 text-[13px] leading-snug">
          {messages.slice(0, shown).map((message, i) =>
            message.from === 'user' ? (
              <div
                key={i}
                className="msg-in ml-8 self-end rounded-2xl rounded-tr-sm bg-white px-3 py-2 shadow-sm"
              >
                {message.text}
                <span className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-muted">
                  09:4{i}
                  <CheckCheck className="h-3 w-3 text-[#2AABEE]" aria-hidden />
                </span>
              </div>
            ) : (
              <div
                key={i}
                className="msg-in mr-8 self-start rounded-2xl rounded-tl-sm bg-brand px-3 py-2 text-white shadow-sm"
              >
                {message.text}
                <span className="mt-0.5 block text-end text-[10px] text-white/70">09:4{i}</span>
              </div>
            ),
          )}

          {agentTyping ? (
            <div className="msg-in self-start rounded-2xl rounded-tl-sm bg-brand px-4 py-3 shadow-sm">
              <span className="flex items-center gap-1" aria-label={typingLabel}>
                <i className="typing-dot" />
                <i className="typing-dot" style={{ animationDelay: '0.15s' }} />
                <i className="typing-dot" style={{ animationDelay: '0.3s' }} />
              </span>
            </div>
          ) : null}
        </div>

        {/* Input bar */}
        <div className="flex items-end gap-2 border-t border-brand/10 bg-white px-3 py-2.5">
          <div className="min-h-9 flex-1 rounded-2xl border border-brand/15 bg-brand-soft/40 px-3.5 py-2 text-[13px] leading-snug">
            {draft ? (
              <>
                {draft}
                <span className="caret" aria-hidden />
              </>
            ) : (
              <span className="text-muted/70">{placeholder}</span>
            )}
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#25D366] text-white">
            {draft ? (
              <Send className="h-4 w-4" aria-hidden />
            ) : (
              <Mic className="h-4 w-4" aria-hidden />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
