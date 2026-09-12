import { sampleRooms } from "../../data/sampleRooms";
import Button from "../shared/Button";
import RoomGrid from "../shared/RoomGrid";
import { useNavigate } from "react-router-dom";
export default function FeaturedRooms() {
  const navigate=useNavigate()
  return (
    <section className="flex flex-col gap-4 py-7 px-6 max-w-7xl mx-auto  ">
    <div className="flex justify-between">
         <h2 className="text-2xl font-semibold text-text">Featured Rooms</h2>
         <Button variant="text" onClick={()=>navigate("/rooms")}>
           View All
         </Button>
    </div>
    <RoomGrid rooms={sampleRooms.slice(0,3)} />
    </section>
  );
}