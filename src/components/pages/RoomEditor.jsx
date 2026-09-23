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
     <section className="min-h-[calc(100vh-4rem)] bg-background px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto w-full max-w-7xl">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="min-w-0 text-2xl font-bold text-text capitalize sm:text-3xl" >Editing: {room.title}</h2>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <Button variant="secondary" onClick={()=>navigate(`/rooms/${roomId}/edit/preview`)}>Preview</Button>
          <Button variant="primary">Publish</Button>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(15rem,16rem)_minmax(0,1fr)] lg:gap-6">
      <div className="w-full rounded-lg border border-border bg-elevated p-4">
        <h3 className="text-lg font-semibold text-text mb-4">Puzzles</h3>

        {puzzles.length ? (
          <div className="flex flex-col gap-3">
            {puzzles.map((puzzle) => (
              <div key={puzzle.id} className="flex items-center gap-2">
                <Link to={`/rooms/${roomId}/edit/puzzles/${puzzle.id}`} className="min-w-0 flex-1 truncate rounded-md border border-border px-3 py-2 text-text hover:bg-surface">
                  {puzzle.question || 'Untitled puzzle'}
                </Link>
                <Button className="shrink-0 px-3" variant="secondary" onClick={() => handleDeletePuzzle(puzzle.id)}>Delete</Button>
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
      </div>
     </section>
    </RoomContext.Provider>
  );
}