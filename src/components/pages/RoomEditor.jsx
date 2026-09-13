import { Link, Outlet, useParams } from "react-router-dom";
import useLocalStorage from "../shared/useLocalStorage";
import Button from "../shared/Button";

export default function RoomEditor() {
  const { roomId } = useParams();
  const [myRooms] = useLocalStorage('my-rooms', []);
  const room = myRooms.find(r => r.id === roomId);
  if (!room) {
    return <p>Room not found</p>;
  }
  const puzzles = room.puzzles ?? [];
  return (
    <section className="bg-background px-6 py-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-text" >Editing: {room.title}</h2>
        <Button variant="primary">Publish</Button>
      </div>
      <div className="flex gap-6">
      <div className="w-64">
        <h3>Puzzles</h3>
        {puzzles.length ? (
          puzzles.map((puzzle) => (
            <Link key={puzzle.id} to={`/rooms/${roomId}/edit/puzzles/${puzzle.id}`}>
              {puzzle.question || 'Untitled puzzle'}
            </Link>
          ))
        ) : (
          <p>No puzzles yet</p>
        )}
        <Link to={`/rooms/${roomId}/edit/puzzles/new`} >
            + Add Puzzle
        </Link>
      </div>
      <div className="flex-1">
         <Outlet />
      </div>
      
      </div>
    </section>
  );
}