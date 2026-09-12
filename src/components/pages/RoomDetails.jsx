import { Link, useParams } from "react-router-dom"
import { sampleRooms } from "../../data/sampleRooms"
import DifficultyBadge from "../shared/DifficultyBadge"
import useLocalStorage from "../shared/useLocalStorage"
import formatTime from "../../utils/formatTime"
export default function RoomDetails() {
    const { roomId } = useParams()
    const room = sampleRooms.find((sampleRoom) => sampleRoom.id === roomId)
    const [bestTime] = useLocalStorage(`best-time-${roomId}`, null)
    return (
        <>
            {room ? (
                <div  className="bg-elevated flex flex-col gap-5 rounded-lg px-6 py-5 border border-border transition hover:border-accent hover:scale-90 m-5  w-auto">
                    <h2 className="font-semibold text-3xl text-text ">{room.title}</h2>
                   <DifficultyBadge difficulty={room.difficulty} />
                    <p className="text-sm text-muted ">{room.puzzleCount} puzzles   <span>•{room.timeLimit} min </span></p>
                    {bestTime ?
                        <p className="text-lg text-accent font-bold px-0  m-0 text-left "><span className="text-muted text-sm px-2">Your best Time:</span>{formatTime(bestTime)}</p>
                        : <p className="text-sm text-muted">Not attempted yet</p>}
                    <Link to={`/rooms/${room.id}/play`} className="px-6 py-3 rounded-lg font-medium transition hover:text-accent" >
                        Start Room
                    </Link>
                </div>
            ) : (
                <h2 className="text-text text-2xl font-bold px-6 py-4">Room not found</h2>
            )}
        </>
    )
}