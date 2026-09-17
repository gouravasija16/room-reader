
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
        <section className="min-h-screen px-6 py-10">
         <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-text ">My Rooms</h2>
                    <Button variant="primary">+ New Room</Button>
                 </div>
            {myRooms.length === 0 ?
                <>
                    <div className="flex flex-col gap-3 justify-center items-center my-auto py-3 ">
                        <p className="text-2xl text-text font-bold">No rooms yet- Create your first rooms</p>
                        <Link to="/create" className="text-lg border border-border rounded-2xl  text-accent inline-block w-48 mx-auto text-center ">Create your Room</Link>
                    </div>
                </>
                :
                 <div className="flex flex-col gap-4">
                  {myRooms.map(room =>(
                    <div key={room.id} className="bg-elevated border border-border rounded-lg px-6 py-5 flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-text capitalize">{room.title}</h3>
                        <p className="text-sm text-muted mt-1">{room.puzzles.length} puzzles • {room.difficulty}</p>
                        <Link to={`/rooms/${room.id}/edit`} className="border border-border text-text px-5 py-2 rounded-lg font-medium hover:border-accent transition">Edit</Link>
                        <Button variant="secondary" onClick={()=>handleDeleteRoom(room.id)}>delete</Button>
                    </div>
                  ))}
                </div>
            }
        </section>
    )
}