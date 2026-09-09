import { sampleRooms } from "../../data/sampleRooms";
import Button from "../shared/Button";
import RoomGrid from "../shared/RoomGrid";
export default function FeaturedRooms() {
  return (
    <section className="flex flex-col gap-4 py-4 px-3 ">
    <div className="flex justify-between">
         <h2 className="text-2xl font-semibold text-text">Featured Rooms</h2>
         <Button variant="text">
           View All
         </Button>
    </div>
    <RoomGrid rooms={sampleRooms.slice(0,3)} />
    </section>
  );
}