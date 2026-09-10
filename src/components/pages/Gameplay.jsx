import { useParams } from "react-router-dom"
import { sampleRooms } from "../../data/sampleRooms"
import { useState } from "react"
import Button from "../shared/Button"
import useTimer from "../shared/useTimer"
export default function Gameplay(){
     const { roomId } = useParams()
     const room = sampleRooms.find((sampleRoom) => sampleRoom.id === roomId)
     const [currentIndex,setCurrentIndex]=useState(0)
     const [answer, setAnswer] = useState("")
     const [feedback,setfeedback]=useState("")
     const time=useTimer()
     const currentPuzzle=room.puzzles[currentIndex]
     console.log(currentIndex)
     function HandleAnswer(e){
        e.preventDefault()
        console.log(answer,currentPuzzle.answer)
        const isCorrect=answer.toLowerCase().trim()===currentPuzzle.answer.toLowerCase().trim()
        console.log(isCorrect)
        if(isCorrect){
            console.log("Advancing")
            setCurrentIndex(prev=>prev + 1)
            console.log(currentIndex)
            setAnswer('')
            setfeedback("")
        }else{
            setfeedback("Not quite,try agian!")
        }
    }
    const isEscape=currentIndex>=room.puzzles.length
    return(
        <div className="bg-elevated px-6 py-4 border border-border rounded-2xl m-8 ">  {isEscape ? <p className="text-3xl font-bold text-text tracking-wide font-sans text-center">You Escaped!</p>
            : <div>
                 <p>{time}</p>
                 <p>Puzzle {currentIndex+1} of {room.puzzles.length}</p>
                 <h2 className="text-text text-2xl text-bold tracking-wide mb-3 font">{currentPuzzle.question}</h2>
                 <form onSubmit={HandleAnswer}>
                   <input value={answer} onChange={(e) => setAnswer(e.currentTarget.value)}placeholder="Enter your answer..." className="border border-border rounded-2xl focus:border-accent text-muted text-lg w-100 h-auto px-2 "></input>
                   {feedback && <p>{feedback}</p>}
                   <Button>Submit</Button>
                </form>
            </div>
        }
        </div>
        
    )
}