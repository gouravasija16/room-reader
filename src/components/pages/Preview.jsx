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
       <section className="mx-4 my-6 w-auto rounded-2xl border border-border bg-elevated px-4 py-5 sm:mx-auto sm:my-8 sm:max-w-4xl sm:px-8 sm:py-7">
               <div className="mb-5 flex items-center gap-3 font-serif">
                 <Button variant="secondary" onClick={() => navigate(`/rooms/${roomId}/edit`)}>Exit Preview</Button>
               </div>
               <div>
               { puzzleEnd ?
                <div className="flex flex-col gap-5">
                    <h2 className="text-accent text-2xl font-bold">Preview Complete!</h2>
                    <p className="text-muted text-lg ">You solved all {room.puzzles.length} puzzles</p>
                    <Button variant="primary" onClick={handlePlay}>Play Again</Button>
                </div>
                :
                <div>
               <p className="text-muted  text-sm font-sans">Puzzle {currentIndex + 1} of {room.puzzles.length}</p>
               <h2 className="my-3 text-xl font-bold tracking-wide font-serif text-amber-50 sm:text-2xl">{currentPuzzle?.question}</h2>
               <form onSubmit={HandleAnswer} className="flex flex-col gap-3 sm:flex-row sm:items-start">
                 <input
                   value={answer}
                   onChange={(e) => setAnswer(e.target.value)}
                   placeholder="Enter your answer..."
                   className="min-w-0 flex-1 rounded-2xl border border-accent px-3 py-2 text-lg text-muted focus:border-accent"
                 ></input>
                  <Button variant="primary" className="sm:w-auto">Submit</Button>
               </form>
                 {feedback && <p className="mt-2 text-red-500 tracking-wide">{feedback}</p>}
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