import RoomCard from "./RoomCard";

export default function RoomGrid({rooms}){
    return(
          <div className="grid grid-cols-3 gap-6">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
      </div>
    )
}