import { Link } from "react-router-dom";
export default  function RoomCard({key,room}){
    return(
         <div className="bg-elevated flex flex-col gap-5 rounded-lg px-6 py-5 border border-border transition hover:border-accent hover:scale-90 " key={key}>
          <h2 className="font-semibold text-lg text-text ">{room.title}</h2>
          <span className="border rounded-full px-2 py-1 text-xs  text-accent self-start font-bold bg-background">{room.difficulty}</span>
          <p className="text-sm text-muted">{room.puzzleCount} puzzles <span>• {room.timeLimit} min</span></p>
          <Link to={`/rooms/${room.id}`} className="px-6 py-3 rounded-lg font-medium transition hover:text-accent" >
              View Room
          </Link>
        
         </div>
    ) 
}