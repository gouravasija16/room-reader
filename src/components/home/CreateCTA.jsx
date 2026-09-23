import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";
export default function CreateCTA(){
    const navigate=useNavigate()
    return(
         <section className="page-container relative mb-14 overflow-hidden rounded-3xl border border-accent/25 bg-surface px-5 py-10 text-center sm:mb-16 sm:px-10 sm:py-12 lg:px-12">
           <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(212,162,76,0.14),transparent_45%)]" />
           <div className="relative z-10">
           <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Build the impossible</p>
           <h2 className="mb-3 text-2xl font-bold text-text sm:text-3xl">Have a mystery of your own?</h2>
           <p className="mx-auto mb-6 max-w-xl text-sm leading-6 text-muted sm:text-base">Create your own escape room, design challenging puzzles, and put players to the test.</p>
           <Button variant="primary" onClick={()=>navigate(`/create`)}>Create Your Room →</Button>
           </div>
        </section>  
    )
}