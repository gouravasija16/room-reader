import { sampleRooms } from "../../data/sampleRooms";
import RoomCard  from "../shared/RoomCard";
import Button from "../shared/Button";
export default function FeaturedRooms() {
  return (
    <section className="flex flex-col gap-4 py-4 px-3 ">
    <div className="flex justify-between">
         <h2 className="text-2xl font-semibold text-text">Featured Rooms</h2>
         <Button variant="text">
           View All
         </Button>
    </div>
    <div className="grid grid-cols-3 gap-6">
      {sampleRooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
      </div>
    </section>
  );
}