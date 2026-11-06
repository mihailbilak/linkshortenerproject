# UI (shadcn/ui)

All UI in this app is built with shadcn/ui. **Do not create custom UI components.** Always use shadcn/ui components.

## Rules

- Every UI element (buttons, inputs, forms, dialogs, cards, tables, dropdowns, toasts, etc.) must come from shadcn/ui in `@/components/ui`.
- Do not write custom components that wrap, replace, or reimplement shadcn/ui primitives. Do not use raw HTML elements (`<button>`, `<input>`, `<table>`, etc.) for anything shadcn/ui provides.
- Compose pages directly from shadcn/ui components, using Tailwind utility classes for layout and spacing only.
- If a needed component is not yet in `components/ui`, add it with the CLI instead of writing it by hand:

```bash
npx shadcn@latest add <component>
```

- Do not hand-edit files in `components/ui` beyond what the CLI generates.
- Style is `base-nova` (Base UI primitives). Check the installed component's API in `components/ui` before using it; it can differ from Radix-based examples.
- Icons come from `lucide-react` only.
- Use `cn()` from `@/lib/utils` to merge class names.
- Clerk auth UI (`SignInButton`, `SignUpButton`, `UserButton`) is the only exception to shadcn/ui; see [`auth.md`](auth.md). Use shadcn/ui `Button` as the child of Clerk buttons where a trigger is needed.
