import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #11162A 0%, #242E6F 50%, #3137B1 100%)",
      }}
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-between px-6 py-10 md:px-10 lg:px-16">
        <header className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-32 md:h-10 md:w-40">
              <Image
                src="/Guru_text.png"
                alt="GURU logo"
                fill
                sizes="160px"
                className="object-contain"
                priority
              />
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <button className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:text-white">
              Platform
            </button>
            <button className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:text-white">
              Solutions
            </button>
            <button className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:text-white">
              Resources
            </button>
          </nav>
        </header>

        <main className="mt-10 flex w-full flex-1 flex-col items-center gap-10 md:mt-16 md:flex-row md:items-stretch">
          <section className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm">
              Intelligent Knowledge · GURU
            </p>
            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Bring clarity to every
              <span className="block bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
                decision your team makes.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/75 sm:text-base">
              GURU centralizes the knowledge your team needs into a single,
              trusted source that is searchable, verified, and available
              everywhere you work.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <button className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#11162A] shadow-[0_18px_45px_rgba(17,22,42,0.55)] transition hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:w-auto">
                Get started with GURU
              </button>
              <button className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:w-auto">
                Book a live demo
              </button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/60">
              <span className="rounded-full bg-black/20 px-3 py-1">No credit card required</span>
              <span className="h-[1px] w-6 bg-white/20" />
              <span>Onboard your team in under a week</span>
            </div>
          </section>

          <section className="relative mt-4 flex flex-1 items-center justify-center md:mt-0">
            <div className="relative w-full max-w-md rounded-3xl bg-white/5 p-[1px] shadow-[0_40px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-3xl bg-[#050816]/90 px-6 py-7">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/40 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-6 h-44 w-44 rounded-full bg-indigo-500/40 blur-3xl" />

                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-8 w-24">
                      <Image
                        src="/Guru_text.png"
                        alt="GURU logo compact"
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs uppercase tracking-[0.24em] text-white/60">
                      Knowledge Hub
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                    99.9% relevance
                  </span>
                </div>

                <div className="relative mt-6 space-y-4 text-sm">
                  <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-center text-xs font-semibold leading-6 text-white">
                      Q
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/50">
                        Question
                      </p>
                      <p className="text-sm text-white">
                        What is our latest onboarding playbook for enterprise customers?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-center text-xs font-semibold leading-6 text-white">
                      A
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-200/75">
                        Instant Answer
                      </p>
                      <p className="text-sm text-white">
                        GURU surfaces the verified playbook, owners, and success
                        metrics in a single, shareable view.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-white/70">
                        <span className="rounded-full bg-emerald-400/10 px-2.5 py-1">
                          Verified 2h ago
                        </span>
                        <span className="rounded-full bg-sky-400/10 px-2.5 py-1">
                          CRM · Sales · CS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6 grid grid-cols-3 gap-3 text-center text-[11px] text-white/70">
                  <div className="rounded-2xl bg-white/5 p-3">
                    <p className="text-xs font-semibold text-white">1.5M+</p>
                    <p className="mt-1 text-[11px] text-white/60">Answers served</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-3">
                    <p className="text-xs font-semibold text-white">40%</p>
                    <p className="mt-1 text-[11px] text-white/60">Faster ramp</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-3">
                    <p className="text-xs font-semibold text-white">+27</p>
                    <p className="mt-1 text-[11px] text-white/60">NPS uplift</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-10 flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-white/55 sm:flex-row">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} GURU. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-white/70 backdrop-blur-sm transition hover:bg-white/10">
              Security
            </button>
            <button className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-white/70 backdrop-blur-sm transition hover:bg-white/10">
              Privacy
            </button>
            <button className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-white/70 backdrop-blur-sm transition hover:bg-white/10">
              Status
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
