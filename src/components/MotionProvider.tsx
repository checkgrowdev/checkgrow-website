"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/* reducedMotion="user" strips transform animations for users with
   prefers-reduced-motion while keeping markup identical on server and
   client — branching the tree on useReducedMotion causes hydration
   mismatches, so never do that in components. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
