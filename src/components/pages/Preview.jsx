import { useContext,useState } from "react"
import { useNavigate } from "react-router-dom"
import { RoomContext } from "../context/RoomContext"
import Button from "../shared/Button"
export default function Preview(){
    const navigate=useNavigate()
    const {room,roomId}=useContext(RoomContext)
    const [answer,setAnswer]=useState("")
    const [isHintsShown,setIsHintsShown]=useState(false)
    const [currentIndex,setCurrentIndex]=useState(0)
    const [feedback,setFeedback]=useState("")
    const currentPuzzle = room.puzzles[currentIndex]
    const puzzleEnd= currentIndex >= room.puzzles.length
    function handleHints() {
      setIsHintsShown((prev) => !prev)

    }
  function HandleAnswer(e) {
    e.preventDefault()
    console.log(answer, currentPuzzle.answer)
    const isCorrect = answer.toLowerCase().trim() === currentPuzzle?.answer.toLowerCase().trim()
    console.log(isCorrect)
    if (isCorrect) {
      console.log("Advancing")
      setCurrentIndex((prev) => prev + 1)
      console.log(currentIndex)
      setAnswer("")
      setFeedback("")
    } else {
      setFeedback("Not quite,try again!")
    }
  }
  function handlePlay(){
    setCurrentIndex(0)
    setAnswer("")
    setIsHintsShown(false)
    setFeedback("")
  }
 
    return(
       <section className="bg-elevated px-6 py-7 border border-border rounded-2xl m-8 "> 
               <div className="flex justify-between items-center mb-5 font-serif gap-3  ">
                 <Button variant="secondary" onClick={() => navigate(`/rooms/${roomId}/edit`)}>Exit Preview</Button>
               </div>
               <div>
               { puzzleEnd ?
                <div className="flex flex-col gap-5">
                    <h2 className="text-text text-2xl font-bold">Preview Complete!</h2>
                    <p className="text-muted text-lg ">You solved all {room.puzzles.length} puzzles</p>
                    <Button variant="primary" onClick={handlePlay}>Play Again</Button>
                </div>
                :
                <div>
               <p className="text-muted  text-sm font-sans">Puzzle {currentIndex + 1} of {room.puzzles.length}</p>
               <h2 className="text-2xl text-bold tracking-wide font-serif text-amber-50 my-3">{currentPuzzle?.question}</h2>
               <form onSubmit={HandleAnswer}>
                 <input
                   value={answer}
                   onChange={(e) => setAnswer(e.target.value)}
                   placeholder="Enter your answer..."
                   className="border border-accent rounded-2xl focus:border-accent text-muted text-lg  w-100 md:w-200  h-auto px-2 mr-6 "
                 ></input>
                  {feedback && <p className="text-red-500 tracking-wide mb-5">{feedback}</p>}
                 <Button variant="primary" className="w-20 h-auto">Submit</Button>
               </form>
               <div className="mt-5">
                 <Button onClick={handleHints} variant="secondary">hints</Button>
               </div>
               {isHintsShown ? (
                 <p className="text-muted text-sm bg-surface my-3 px-3 py-2 border border-transparent rounded-2xl">
                   {currentPuzzle?.hint}
                 </p>
               ) : null}
             </div>
               }
             </div>
            </section>
    )
}