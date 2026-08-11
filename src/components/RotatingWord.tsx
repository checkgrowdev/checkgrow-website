"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const WORDS = ["product", "buyers", "market", "channels"];
const HOLD_MS = 2600;

/* Rotating hero verb with a fade-glow typewriter: characters light up in
   accent with a soft glow, settle into ink, and the word blurs away before
   the next one types in. SSR and pre-hydration render the plain first word;
   the cycle only starts client-side, and never for reduced-motion users. */
export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const raf = requestAnimationFrame(() => setRunning(true));
    const t = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), HOLD_MS);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(t);
    };
  }, []);

  if (!running) return <span>{WORDS[0]}</span>;

  const word = WORDS[index];
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={word}
        className="inline-block whitespace-pre"
        exit={{ opacity: 0, filter: "blur(6px)" }}
        transition={{ duration: 0.22, ease: [0.4, 0, 1, 1] }}
      >
        {word.split("").map((ch, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block"
            initial={{ opacity: 0, color: "#9BA6FF", textShadow: "0 0 26px rgba(155,166,255,0.95)" }}
            animate={{ opacity: 1, color: "#181818", textShadow: "0 0 0px rgba(155,166,255,0)" }}
            transition={{ delay: 0.12 + i * 0.065, duration: 0.34, ease: [0, 0, 0.2, 1] }}
          >
            {ch}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
}
