# Agent Instructions

This is a link shortener application. These instructions are for LLM coding agents and are mandatory.

## CRITICAL: READ THE DOCS FIRST

**This is the single most important rule in this file. You MUST ALWAYS read the relevant individual instruction file(s) in the `/docs` directory BEFORE generating, writing, or changing ANY code. No exceptions, regardless of how small or trivial the change seems.**

- Identify every `/docs` file relevant to the task (see the Docs index below) and read each one in full before producing any code.
- If a task spans multiple topics (for example auth and UI), read ALL of the corresponding docs.
- The docs contain the project's coding standards. Do not rely on general knowledge of these libraries; versions here are newer than most training data.
- Code written without first reading the relevant docs is considered incorrect and must be redone.

## Stack

- Next.js 16 (App Router, `proxy.ts` instead of `middleware.ts`), React 19, TypeScript (strict)
- Clerk (`@clerk/nextjs`) for authentication
- Drizzle ORM + Neon (PostgreSQL) for data
- shadcn/ui (`base-nova` style, Base UI primitives) + Tailwind CSS v4 + lucide-react for UI

## Docs index

For detailed guidelines on specific topics, refer to the modular documentation in the `/docs` directory. You MUST read the relevant .md file(s) BEFORE generating ANY code.

- [`/docs/auth.md`](docs/auth.md): Clerk-only authentication, protected `/dashboard`, homepage redirect for signed-in users, modal sign-in/sign-up.
- [`/docs/ui.md`](docs/ui.md): shadcn/ui only for all UI, no custom components, add missing components via the shadcn CLI.

## Core rules (summary)

1. Use shadcn/ui components for all UI. Do not create custom UI primitives or use raw HTML for things shadcn provides.
2. Authentication is Clerk only. Never build custom auth.
3. All database access goes through Drizzle, in helper functions under `/data`. Never query the database from components or actions directly.
4. All mutations go through Server Actions in colocated `actions.ts` files, with typed parameters and Zod validation. Never use `FormData` as a parameter type.
5. Every data read or write on user-owned data must be scoped to the authenticated user's Clerk `userId`.
6. Use the `@/` import alias. No relative imports that climb out of the current directory.

## Workflow

- Run `npm run lint` and `npx tsc --noEmit` after changes and fix all errors.
- Do not add dependencies that duplicate existing ones (for example another UI library, ORM, or auth provider).
- Do not edit generated files in `components/ui` by hand beyond what the shadcn CLI produces, and never edit files in `drizzle/` manually.
- Do not commit or log secrets. Environment variables live in `.env` and are accessed through `process.env`.
