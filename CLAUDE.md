@AGENTS.md

# checkgrow-site

Checkgrow marketing website (waitlist launch page). Built and maintained under `>>website-builder` rules.

- **Dev URL:** http://localhost:8030 (`pnpm dev`; port registered in `../.ports.json` — user-specified 8030, an approved exception to the 8100–8999 range)
- **Design system:** bound to the Checkgrow Brand Pack at `~/developing-ai/Projects/brand/checkgrow` (tokens mapped in `src/app/globals.css`; never invent colours, type or icons — the pack wins). Docs in Obsidian: `Knowledge Projects/Projects/website-developer/checkgrow-site/`.
- **Stack:** Next.js App Router + TypeScript + Tailwind v4 + motion (motion.dev), pnpm.
- **Primary conversion:** Join the waitlist (form posts to `/api/waitlist`, stored in `.data/waitlist.jsonl` locally — swap for a real store before production).
- **Mockups:** `public/mockups/*.svg` are self-contained animated SVGs sourced from `Projects/checkgrow-website/mockups/` — edit them there, then re-copy.
