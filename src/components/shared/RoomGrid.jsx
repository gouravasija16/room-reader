import RoomCard from "./RoomCard";

export default function RoomGrid({rooms}){
    return(
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-4 sm:gap-6">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} id={room.id}  />
      ))}
      </div>
    )
}