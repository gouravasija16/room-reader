import { Link, useParams } from "react-router-dom"
import { sampleRooms } from "../../data/sampleRooms"
import DifficultyBadge from "../shared/DifficultyBadge"
export default function RoomDetails() {
    const { roomId } = useParams()
    const room = sampleRooms.find((sampleRoom) => sampleRoom.id === roomId)

    return (
        <>
            {room ? (
                <div  className="bg-elevated flex flex-col gap-5 rounded-lg px-6 py-5 border border-border transition hover:border-accent hover:scale-90 m-5 w-200">
                    <h2 className="font-semibold text-3xl text-text ">{room.title}</h2>
                   <DifficultyBadge difficulty={room.difficulty} />
                    <p className="text-sm text-muted">{room.puzzleCount} puzzles   <span>•{room.timeLimit} min </span></p>
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