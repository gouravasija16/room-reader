import RoomCard from "./RoomCard";

export default function RoomGrid({rooms}){
    return(
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} id={room.id}  />
      ))}
      </div>
    )
}