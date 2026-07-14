import { ArrowRight, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const consultationEmail =
  "mailto:hello@vantisites.com?subject=Free%2030-minute%20consultation";

export function HomePage() {
  const prefersReducedMotion = useReducedMotion();

  const entrance = prefersReducedMotion
    ? false
    : {
        opacity: 0,
        y: 24,
      };

  const transition = {
    duration: prefersReducedMotion ? 0 : 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="border-b border-border/80 bg-canvas/90 backdrop-blur-md">
        <div className="site-container flex min-h-20 items-center justify-between gap-6">
          <a
            className="font-display text-xl font-medium tracking-[-0.03em]"
            href="/Vanti-Sites/"
            aria-label="Vanti Sites home"
          >
            Vanti Sites
          </a>

          <a
            className="hidden items-center gap-2 text-sm font-semibold transition-colors hover:text-cobalt sm:inline-flex"
            href={consultationEmail}
          >
            Book a consultation
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="section-shell overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_25%_20%,rgba(49,94,251,0.09),transparent_38%)]"
          />

          <div className="site-container section-grid items-center">
            <motion.div
              className="col-span-12 lg:col-span-7"
              initial={entrance}
              animate=
                opacity: 1,
                y: 0,
              
              transition={transition}
            >
              <p className="eyebrow">
                Founder-led web design and development
              </p>

              <h1 className="display-heading mt-7">
                A website that reflects the quality of your business.
              </h1>

              <p className="body-copy mt-8 max-w-2xl">
                Vanti Sites helps local and small businesses turn an absent,
                outdated, or underperforming web presence into something clear,
                credible, and built to move the business forward.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cobalt px-6 text-sm font-bold text-white shadow-editorial transition-colors hover:bg-cobalt-hover"
                  href={consultationEmail}
                >
                  Book a free 30-minute consultation
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>

                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 px-2 text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
                  href="tel:+16038405638"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  +1 (603) 840-5638
                </a>
              </div>

              <ul
                className="mt-12 grid max-w-2xl gap-4 border-t border-border pt-6 text-sm text-ink-muted sm:grid-cols-3"
                aria-label="Vanti Sites advantages"
              >
                <li>Free demo before commitment</li>
                <li>Focused two-partner team</li>
                <li>Built for local businesses</li>
              </ul>
            </motion.div>

            <motion.div
              className="col-span-12 mt-14 lg:col-span-5 lg:mt-0"
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 28,
                    }
              }
              animate=
                opacity: 1,
                x: 0,
              
              transition=
                ...transition,
                delay: prefersReducedMotion ? 0 : 0.12,
              
            >
              <div className="relative mx-auto max-w-lg">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 -z-10 rounded-lg border border-cobalt/15"
                />

                <div className="overflow-hidden rounded-lg border border-graphite-border bg-graphite text-white shadow-editorial">
                  <div className="flex items-center justify-between border-b border-graphite-border px-5 py-4">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-graphite-muted">
                      Digital presence
                    </span>

                    <span className="size-2 rounded-full bg-cobalt" />
                  </div>

                  <div className="space-y-10 p-7 sm:p-9">
                    <div>
                      <p className="font-display text-4xl leading-none tracking-[-0.04em]">
                        Clear.
                        <br />
                        Credible.
                        <br />
                        Considered.
                      </p>

                      <p className="mt-5 max-w-sm text-sm leading-6 text-graphite-muted">
                        Strategy, design, development, and launch—handled as one
                        connected process.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-graphite-border bg-graphite-border">
                      {["Strategy", "Design", "Development", "Launch"].map(
                        (service, index) => (
                          <div
                            className="bg-graphite-raised p-4"
                            key={service}
                          >
                            <span className="text-xs text-graphite-muted">
                              0{index + 1}
                            </span>

                            <p className="mt-5 text-sm font-semibold">
                              {service}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="site-container flex flex-col gap-3 py-7 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vanti Sites.</p>

          <a className="transition-colors hover:text-ink" href="mailto:hello@vantisites.com">
            hello@vantisites.com
          </a>
        </div>
      </footer>
    </div>
  );
}
