import Button from '../shared/Button.jsx'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Clock3, LockKeyhole, Sparkles } from 'lucide-react'

export default function Hero({ backgroundImage }){
  const navigate=useNavigate()
    return (
           <section
             className="relative isolate overflow-hidden border-b border-border bg-background"
             style={backgroundImage ? { '--home-background-image': `url(${backgroundImage})` } : undefined}
           >
             <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--color-background)_15%,transparent_100%),var(--home-background-image,none)] bg-cover bg-center opacity-40" />
             <div className="absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
             <div className="absolute -bottom-48 left-1/4 -z-10 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
             <div className="page-container grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
               <div className="max-w-2xl text-center lg:text-left">
                 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                   <Sparkles size={14} aria-hidden="true" />
                   Your next mystery awaits
                 </div>
                 <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-6xl lg:text-7xl">Can you escape <span className="text-accent">in time?</span></h1>
                 <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg lg:mx-0">Step into immersive worlds, crack clever puzzles, and race the clock with a community of curious minds.</p>
                 <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                   <Button variant="primary" onClick={()=>navigate(`/rooms`)}>Explore Rooms <ArrowRight size={16} aria-hidden="true" /></Button>
                   <Button variant="secondary" onClick={()=>navigate(`/create`)}>Create a Room</Button>
                 </div>
                 <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted lg:justify-start">
                   <span className="flex items-center gap-2"><Clock3 size={16} className="text-accent" />Timed challenges</span>
                   <span className="flex items-center gap-2"><LockKeyhole size={16} className="text-accent" />Fresh mysteries</span>
                 </div>
               </div>
               <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                 <div className="rounded-3xl border border-accent/25 bg-surface p-3 shadow-2xl shadow-black/30">
                   <div className="rounded-2xl border border-border bg-elevated p-6 sm:p-8">
                     <div className="mb-12 flex items-center justify-between">
                       <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Case file 014</span>
                       <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">In progress</span>
                     </div>
                     <div className="space-y-4">
                       <div className="h-2 w-2/3 rounded-full bg-accent/70" />
                       <div className="h-2 w-full rounded-full bg-border" />
                       <div className="h-2 w-4/5 rounded-full bg-border" />
                     </div>
                     <div className="mt-12 flex items-end justify-between">
                       <div><p className="text-xs text-muted">Time remaining</p><p className="mt-1 text-3xl font-bold text-text">24:18</p></div>
                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-2xl text-accent">?</div>
                     </div>
                   </div>
                 </div>
                 <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-xl sm:-left-6">
                   <p className="text-xs text-muted">Players escaping now</p>
                   <p className="mt-1 font-semibold text-text">1,284 <span className="text-accent">•</span> live</p>
                 </div>
               </div>
             </div>
           </section>
       
    )
}