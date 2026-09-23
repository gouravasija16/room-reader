    
import Button from "../shared/Button"
import useLocalStorage from "../shared/useLocalStorage"
import { Link } from "react-router-dom"

export default function MyRooms(){
    const [myRooms,setMyRooms]=useLocalStorage("my-rooms",[])
    function handleDeleteRoom(roomId){
        if (!window.confirm("Delete this room ?")) return
        const updatedRooms=myRooms.filter(r=>r.id!==roomId)
        setMyRooms(updatedRooms)
    }
    return(
        <section className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-3xl font-bold text-text">My Rooms</h2>
                <Link
                    to="/create"
                    className="inline-flex w-full justify-center sm:w-auto"
                >
                    <Button variant="primary">+ New Room</Button>
                </Link>
            </div>
            {myRooms.length === 0 ?
                <>
                    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
                        <p className="max-w-md text-xl font-bold text-text sm:text-2xl">
                            No rooms yet — Create your first room
                        </p>
                        <Link
                            to="/create"
                            className="inline-block w-full max-w-xs rounded-2xl border border-border px-4 py-2 text-lg text-accent transition hover:border-accent"
                        >
                            Create your room
                        </Link>
                    </div>
                </>
                :
                <div className="grid gap-4">
                    {myRooms.map(room => (
                        <article
                            key={room.id}
                            className="flex flex-col gap-5 rounded-lg border border-border bg-elevated px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                        >
                            <div className="min-w-0">
                                <h3 className="wrap-break-word text-xl font-semibold capitalize text-text">
                                    {room.title}
                                </h3>
                                <p className="mt-1 text-sm text-muted">
                                    {room.puzzles.length} puzzles <span aria-hidden="true">•</span> {room.difficulty}
                                </p>
                            </div>
                            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                                <Link
                                    to={`/rooms/${room.id}/edit`}
                                    className="inline-flex min-h-10 items-center justify-center rounded-lg border border-border px-5 py-2 font-medium text-text transition hover:border-accent"
                                >
                                    Edit
                                </Link>
                                <Button variant="secondary" onClick={() => handleDeleteRoom(room.id)}>
                                    Delete
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            }
        </section>
    )
}        

