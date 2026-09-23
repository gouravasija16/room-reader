export default function HowItWorks(){
    const steps=[
        {number:1,title:'Discover',text:'Browse rooms by difficulty, category, or theme and find one that excites you'},
        {number:2,title:'Solve',text:'Work through puzzles, riddles, and clues under a ticking clock'},
        {number:3,title:'Escape',text:'Check the final puzzle, beat the timer, and see how you rank'},
    ]
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 lg:px-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">The simple way in</p>
            <h2 className="mb-8 text-2xl font-semibold text-text sm:text-3xl">How it works</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {steps.map(step => (
                    <div key={step.number} className="group rounded-2xl border border-border bg-surface p-6 text-left transition hover:-translate-y-1 hover:border-accent/60">
                        <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 bg-accent/10 text-xl font-bold text-accent">{step.number}</span>
                        <h3 className="text-lg font-semibold text-text">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}