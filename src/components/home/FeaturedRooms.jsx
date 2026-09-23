import { sampleRooms } from "../../data/sampleRooms";
import Button from "../shared/Button";
import RoomGrid from "../shared/RoomGrid";
import { useNavigate } from "react-router-dom";
export default function FeaturedRooms() {
  const navigate=useNavigate()
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-16 sm:px-8 lg:px-12">
    <div className="flex items-end justify-between gap-4">
         <div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pick your challenge</p><h2 className="text-2xl font-semibold text-text sm:text-3xl">Featured Rooms</h2></div>
         <Button variant="text" onClick={()=>navigate("/rooms")}>View All <span aria-hidden="true">→</span></Button>
    </div>
    <RoomGrid rooms={sampleRooms.slice(0,3)} />
    </section>
  );
}