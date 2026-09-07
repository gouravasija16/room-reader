export default function HowItWorks(){
    const steps=[
        {number:1,title:'Discover',text:'Browse rooms by difficulty,category, or theme and find one that excites you'},
        {number:2,title:'Solve',text:'Work through puzzles,riddles, and clues under a ticking clock'},
        {number:3,title:'Escape',text:'Check the final puzzle,beat the timer,and see how you rank'},
    ]
    return (
        <section>
            <h2>How it Works</h2>
            <div className="steps">
                {steps.map(step => (
                    <div key={step.number}>
                        <span>{step.number}</span>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}