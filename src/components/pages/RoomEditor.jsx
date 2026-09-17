import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "../shared/useLocalStorage";
import Button from "../shared/Button";
import { RoomContext } from "../context/RoomContext";
export default function RoomEditor() {
  const { roomId } = useParams();
  const [myRooms,setMyRooms] = useLocalStorage('my-rooms', []);
  const room = myRooms.find(r => r.id === roomId);
  const navigate=useNavigate()
  if (!room) {
    return <p>Room not found</p>;
  }
  const puzzles = room.puzzles ?? [];
  function handleDeletePuzzle(puzzleId){
    if(!window.confirm("Delete this puzzle?")) return 
    const updatedRoom={...room,puzzles:room.puzzles.filter(p=>p.id!==puzzleId)}
    const updatedRooms= myRooms.map(r=>r.id=== roomId ?updatedRoom : r)
    setMyRooms(updatedRooms)
  }
  return (
    <RoomContext.Provider value={{room,roomId,myRooms,setMyRooms}} >
    <section className="bg-background px-6 py-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-text capitalize" >Editing: {room.title}</h2>
        <Button variant="primary">Publish</Button>
      </div>
      <div className="flex gap-6">
      <div className="w-64 bg-elevated border border-border rounded-lg p-4">
        <h3 className="text-lg font-semibold text-text mb-4">Puzzles</h3>

        {puzzles.length ? (
          <div className="flex flex-col gap-3">
            {puzzles.map((puzzle) => (
              <div key={puzzle.id} className="flex gap-4">
                <Link to={`/rooms/${roomId}/edit/puzzles/${puzzle.id}`} className="px-3 py-2 border rounded-md hover:bg-surface text-text truncate">
                  {puzzle.question || 'Untitled puzzle'}
                </Link>
                <Button  variant="secondary" onClick={() => handleDeletePuzzle(puzzle.id)}>delete</Button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted text-sm ">No puzzles yet</p>
        )}
        <div className="mt-5">
        <Button onClick={()=>navigate(`/rooms/${roomId}/edit/puzzles/new`)}  variant="primary" className="w-full">
          + Add Puzzle
        </Button>
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      </div>
     </section>
    </RoomContext.Provider>
  );
}