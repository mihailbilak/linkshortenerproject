import { SignUpButton } from "@clerk/nextjs";
import { ArrowDown, ArrowRight, Check, Link2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Link2,
    title: "Shorter by design",
    description:
      "Turn long, unwieldy URLs into clean links that are easy to share anywhere.",
  },
  {
    icon: Sparkles,
    title: "Easy to remember",
    description:
      "Give every destination a simple, tidy link that looks right in a message or post.",
  },
  {
    icon: Check,
    title: "Ready in a moment",
    description:
      "Skip the clutter and get straight to sharing links that take people where they need to go.",
  },
];

export default function Home() {
  return (
    <main className="relative isolate flex-1 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_65%)]"
      />
      <section className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pb-24 pt-16 sm:px-10 sm:pt-24 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:px-12 lg:pb-32 lg:pt-28">
        <div className="flex flex-col items-start">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            A simpler way to share
          </div>
          <h1 className="max-w-2xl text-5xl font-semibold tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
            Big links.
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
              Smaller footprint.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Make long URLs short, neat, and ready to share. Keep things simple
            for you—and for everyone who clicks.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <SignUpButton mode="modal">
              <Button size="lg" className="h-11 gap-2 px-5">
                Make your first short link
                <ArrowRight />
              </Button>
            </SignUpButton>
            <a
              href="#features"
              className="inline-flex h-11 items-center gap-2 rounded-lg px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              See how it works
              <ArrowDown className="size-4" />
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Free to get started. No fuss, just shorter links.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-sky-500/15 via-indigo-500/10 to-fuchsia-500/15 blur-3xl"
          />
          <div className="relative rounded-3xl border border-border/70 bg-card/90 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-border/70 pb-5">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  A better-looking link
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  From long to ready-to-share
                </p>
              </div>
              <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <Link2 className="size-5" />
              </span>
            </div>
            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-border/70 bg-background/70 p-4">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Your original link
                </p>
                <p className="break-all text-sm leading-6 text-muted-foreground">
                  example.com/articles/how-to-share-links
                </p>
              </div>
              <div className="flex justify-center text-muted-foreground">
                <ArrowDown className="size-4" />
              </div>
              <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-400/10 to-indigo-400/10 p-4">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-300">
                  Short and sweet
                </p>
                <p className="text-lg font-semibold tracking-tight text-foreground">
                  linkshort.app/hello
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-muted/50 p-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-emerald-400/10 text-emerald-300">
                <Check className="size-4" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Neat, simple, shareable
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  One less thing getting in the way.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-xl border border-border/70 bg-card px-4 py-3 shadow-xl sm:-left-10">
            <p className="text-xs font-medium text-muted-foreground">
              Less URL
            </p>
            <p className="mt-0.5 text-sm font-semibold text-foreground">
              More room to share
            </p>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="border-t border-border/60 bg-card/30 px-6 py-20 sm:px-10 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-sky-300">Shorten the noise</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              All the essentials. None of the clutter.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Make sharing the link the easiest part of your next message,
              campaign, or conversation.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-border/70 bg-background/70 p-6 transition-colors hover:border-sky-400/30 sm:p-7"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-border/70 bg-background/70 p-6 sm:flex-row sm:p-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Ready to make links simpler?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Start with a link you already love to share.
              </p>
            </div>
            <SignUpButton mode="modal">
              <Button size="lg" className="gap-2">
                Get started
                <ArrowRight />
              </Button>
            </SignUpButton>
          </div>
        </div>
      </section>
    </main>
  );
}
