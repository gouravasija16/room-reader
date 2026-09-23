import { Link } from "react-router-dom";
import DifficultyBadge from "./DifficultyBadge";
export default function RoomCard({key,room,id}){
    return(
         <div className="bg-elevated flex min-h-56 flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 text-center border border-border transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-lg hover:shadow-black/20  " key={key} id={id}>
          <h2 className="font-semibold text-lg text-text capitalize">{room.title}</h2>
          <DifficultyBadge difficulty={room.difficulty} />
          <p className="text-sm text-muted">{room.puzzleCount} puzzles <span>• {room.timeLimit} min</span></p>
          <Link to={`/rooms/${room.id}`} className="px-6 py-3 rounded-lg font-medium transition hover:text-accent" >
              View Room
          </Link>
         </div>
    ) 
}