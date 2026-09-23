
import { Link } from "react-router-dom";
import DifficultyBadge from "./DifficultyBadge";
export default function RoomCard({room,id}){
    return(
         <article className="group flex min-h-80 flex-col overflow-hidden rounded-2xl border border-border bg-elevated text-left transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-lg hover:shadow-black/20" id={id}>
          <div className="relative aspect-video w-full overflow-hidden bg-[radial-gradient(circle_at_25%_20%,rgba(212,162,76,0.3),transparent_42%),linear-gradient(135deg,#1a1f24,#0b0d0f)]">
            {room.coverImage && <img src={room.coverImage} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />}
            <div className="absolute inset-0 bg-linear-to-t from-elevated via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4"><DifficultyBadge difficulty={room.difficulty} /></div>
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <h2 className="text-lg font-semibold capitalize text-text">{room.title}</h2>
            <p className="text-sm text-muted">{room.puzzleCount} puzzles <span aria-hidden="true">•</span> {room.timeLimit} min</p>
            <Link to={`/rooms/${room.id}`} className="mt-auto inline-flex w-fit rounded-lg py-2 font-medium text-accent transition hover:underline focus:outline-none focus:ring-2 focus:ring-accent" >
                View Room <span className="ml-1" aria-hidden="true">→</span>
            </Link>
          </div>
         </article>
    ) 
}