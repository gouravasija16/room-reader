import { ArrowRight, BookOpen, DoorOpen, Lightbulb, Trophy } from "lucide-react"
import { Link } from "react-router-dom"

const steps = [
    {
        number: "01",
        title: "Choose your room",
        text: "Find a mystery that fits your mood. Browse the room collection and pick a difficulty.",
        detail: "A new story starts here",
        icon: DoorOpen,
    },
    {
        number: "02",
        title: "Follow the clues",
        text: "Solve each puzzle before the timer runs out. Stuck? Reveal a hint and keep moving.",
        detail: "Think it through, one clue at a time",
        icon: BookOpen,
    },
    {
        number: "03",
        title: "Make your escape",
        text: "Clear every puzzle to escape, then see your time and save a new personal best.",
        detail: "Every second counts",
        icon: Trophy,
    },
]

export default function HowItWorks() {
    return (
        <section className="relative isolate overflow-hidden border-y border-border/70 bg-surface/40">
            <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
            <div className="page-container py-16 sm:py-20 lg:py-24">
                <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                            <Lightbulb size={15} aria-hidden="true" />
                            Your escape plan
                        </p>
                        <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                            Three steps. One way out.
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
                            Pick a room, put the clues together, and race the clock to freedom.
                        </p>
                    </div>
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-2 text-xs font-medium text-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                        No experience needed
                    </div>
                </div>

                <div className="relative grid gap-4 md:grid-cols-3 md:gap-5">
                    <div
                        className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-9 hidden h-px bg-border md:block"
                        aria-hidden="true"
                    />
                    {steps.map((step) => {
                        const Icon = step.icon

                        return (
                            <article
                                key={step.number}
                                className="group relative rounded-2xl border border-border bg-background/90 p-5 transition duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/15 sm:p-6"
                            >
                                <div className="relative z-10 mb-7 flex items-center justify-between">
                                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/25 bg-background text-accent shadow-[0_0_0_6px_var(--color-background)] transition-colors group-hover:bg-accent group-hover:text-background">
                                        <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                                    </span>
                                    <span className="font-mono text-sm font-medium tracking-widest text-muted/70">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-text sm:text-xl">{step.title}</h3>
                                <p className="mt-2 min-h-12 text-sm leading-6 text-muted">{step.text}</p>
                                <p className="mt-5 border-t border-border pt-4 text-xs font-medium tracking-wide text-accent">
                                    {step.detail}
                                </p>
                            </article>
                        )
                    })}
                </div>

                <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-accent/20 bg-accent/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <div>
                        <p className="font-semibold text-text">Ready to take on your first room?</p>
                        <p className="mt-1 text-sm text-muted">Your next mystery is only a clue away.</p>
                    </div>
                    <Link
                        to="/rooms"
                        className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-[#e2b45c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                        Browse rooms
                        <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    )
}