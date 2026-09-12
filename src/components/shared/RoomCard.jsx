import { Link } from "react-router-dom";
import DifficultyBadge from "./DifficultyBadge";
export default function RoomCard({key,room}){
    return(
         <div className="bg-elevated flex flex-col gap-5 rounded-lg px-6 py-5 border border-border transition hover:border-accent hover:scale-90 " key={key}>
          <h2 className="font-semibold text-lg text-text ">{room.title}</h2>
          <DifficultyBadge difficulty={room.difficulty} />
          <p className="text-sm text-muted">{room.puzzleCount} puzzles <span>• {room.timeLimit} min</span></p>
          <Link to={`/rooms/${room.id}`} className="px-6 py-3 rounded-lg font-medium transition hover:text-accent" >
              View Room
          </Link>
         </div>
    ) 
}