import { sampleRooms } from "../../data/sampleRooms";
import RoomCard  from "../shared/RoomCard";
import Button from "../shared/Button";
export default function FeaturedRooms() {
  return (
    <section>
    <div>
         <h2>Featured Rooms</h2>
         <Button>
           View All
         </Button>
    </div>
   
      {sampleRooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </section>
  );
}