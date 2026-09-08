export default function HowItWorks(){
    const steps=[
        {number:1,title:'Discover',text:'Browse rooms by difficulty,category, or theme and find one that excites you'},
        {number:2,title:'Solve',text:'Work through puzzles,riddles, and clues under a ticking clock'},
        {number:3,title:'Escape',text:'Check the final puzzle,beat the timer,and see how you rank'},
    ]
    return (
        <section className="text-center  px-8 py-5">
            <h2 className="text-2xl font-semibold text-text mb-4">How it Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                {steps.map(step => (
                    <div key={step.number} className="border border-border rounded-4xl">
                        <span className="text-3xl font-bold text-accent border rounded-full w-12 h-12 flex items-center justify-center border-accent ">{step.number}</span>
                        <h3 className="font-semibold text-text items-center text-lg ">{step.title}</h3>
                        <p className="text-sm text-muted text-center ">{step.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}