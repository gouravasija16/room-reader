import { useParams,useNavigate } from "react-router-dom"
import { sampleRooms } from "../../data/sampleRooms"
import DifficultyBadge from "../shared/DifficultyBadge"
import useLocalStorage from "../shared/useLocalStorage"
import formatTime from "../../utils/formatTime"
import Button from "../shared/Button"
export default function RoomDetails() {
    const navigate=useNavigate()
    const { roomId } = useParams()
    const [myRooms]=useLocalStorage('my-rooms',[])
    const allRooms=[...sampleRooms,...myRooms]
    const room = allRooms.find(r =>r.id === roomId)
    const [bestTime] = useLocalStorage(`best-time-${roomId}`, null)
    return (
        <>
            {room ? (
                <div  className="bg-elevated flex flex-col gap-5 rounded-lg px-6 py-5 border border-border transition hover:border-accent hover:scale-90 m-5  w-auto">
                    <h2 className="font-semibold text-3xl text-text ">{room.title}</h2>
                   <DifficultyBadge difficulty={room.difficulty} />
                   <p className="text-muted font-medium text-lg">{room.description}</p>
                    <p className="text-sm text-muted ">{room.puzzleCount} puzzles   <span>• {room.timeLimit} min </span></p>
                    {bestTime ?
                        <p className="text-lg text-accent font-bold px-0  m-0 text-left "><span className="text-muted text-sm px-2">Your best Time:</span>{formatTime(bestTime)}</p>
                        : <p className="text-sm text-muted">Not attempted yet</p>}
                    <Button onClick={()=>navigate(`/rooms/${room.id}/play`)} variant="primary" >
                        Start Room
                    </Button>
                </div>
            ) : (
                <h2 className="text-text text-2xl font-bold px-6 py-4">Room not found</h2>
            )}
        </>
    )
}