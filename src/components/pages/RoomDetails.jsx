import { useParams } from "react-router-dom"
import { sampleRooms } from "../../data/sampleRooms"
import Button from "../shared/Button"

export default function RoomDetails() {
    const { roomId } = useParams()
    const room = sampleRooms.find((sampleRoom) => sampleRoom.id === roomId)

    return (
        <>
            {room ? (
                <div  className="bg-elevated flex flex-col gap-5 rounded-lg px-6 py-5 border border-border transition hover:border-accent hover:scale-90 m-5 text-center ">
                    <h2 className="font-semibold text-3xl text-text ">{room.title}</h2>
                    <span className="border rounded-full px-2 py-1 text-lg text-accent self-start font-bold bg-background text-center">{room.difficulty}</span>
                    <p className="text-2xl text-muted">{room.puzzleCount} puzzles    <span>•{room.timeLimit} min </span></p>
                    <Button>Start Room</Button>
                </div>
            ) : (
                <h2 className="text-text text-2xl font-bold px-6 py-4">Room not found</h2>
            )}
        </>
    )
}