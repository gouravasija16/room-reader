import { Link } from "react-router-dom"
import { sampleRooms } from "../../data/sampleRooms"
import useLocalStorage from "../shared/useLocalStorage"
import formatTime from "../../utils/formatTime"
export default function History(){
    const [myRooms]=useLocalStorage('my-rooms',[])
    const allRooms=[...sampleRooms,...myRooms]
    const playedRooms= allRooms.map(room=>({
        ...room,
        bestTime:JSON.parse(localStorage.getItem(`best-time-${room.id}`)|| 'null')
    }))
    .filter(room=>room.bestTime !==null)
    return(
        <section className="min-h-screen px-6 py-10">
        <h2 className="text-2xl text-text font-bold mb-5">Play History</h2>
        {playedRooms.length ? (
            <div className="flex flex-col gap-4">
                {playedRooms.map(room => (
                    <div key={room.id} className= "flex flex-col gap-4 bg-elevated border border-border rounded-lg px-6 py-5 ">
                    <h2 className="text-xl font-semibold text-text capitalize">{room.title}</h2>
                    <p className="text-sm text-muted mt-1">Best time : {formatTime(room.bestTime)}</p>
                    </div>
                ))}
            </div>
        ) : (
            <div className="flex flex-col gap-3 justify-center items-center my-auto py-3">
                <h2 className="text-2xl text-text font-bold">You haven't completed any rooms yet</h2>
                <Link to="/rooms" className="border border-border text-text px-5 py-2 rounded-lg font-medium hover:border-accent transition"> Browse Rooms</Link>
            </div>
        )}
         </section>
        )
}