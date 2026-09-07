import Button from "./Button";

export default  function RoomCard({key,room}){
    return(
         <div className="room-card" key={key}>
          <h2>{room.title}</h2>
          <h3>{room.difficulty}</h3>
          <p>{room.puzzleCount} puzzles <span>• {room.timeLimit} min</span></p>
          <Button>View Room</Button>
         </div>
    )
}