import { useParams } from "react-router-dom"
import { sampleRooms } from "../../data/sampleRooms"
import { useState } from "react"
import Button from "../shared/Button"
export default function Gameplay(){
    const { roomId } = useParams()
     const room = sampleRooms.find((sampleRoom) => sampleRoom.id === roomId)
     const [currentIndex,setCurrentIndex]=useState(0)
    const [answer, setAnswer] = useState("")
     const currentPuzzle=room.puzzles[currentIndex]
    return(
        <div className="bg-elevated px-6 py-4 border border-border rounded-2xl m-5 ">
            <h2 className="text-text text-2xl text-bold tracking-wide mb-3 font">{currentPuzzle.question}</h2>
            <input value={answer} onChange={(e) => setAnswer(e.currentTarget.value)}placeholder="Enter your answer..." className="border border-border rounded-2xl focus:border-accent text-muted text-lg w-100 h-auto px-2 "></input>
            <Button>Submit</Button>
        </div>
        
    )
}