import { useNavigate, useParams } from "react-router-dom"
import { sampleRooms } from "../../data/sampleRooms"
import { useEffect, useState } from "react"
import Button from "../shared/Button"
import useTimer from "../shared/useTimer"

export default function Gameplay() {
  const navigate = useNavigate()
  const { roomId } = useParams()
  const room = sampleRooms.find((sampleRoom) => sampleRoom.id === roomId)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState("")
  const [feedback, setfeedback] = useState("")
  const [isHintsShown, setIsHintsShown] = useState(false)
  const [count,setCount]=useState(0)

  const currentPuzzle = room.puzzles[currentIndex]
  const isEscape = currentIndex >= room.puzzles.length
  const time = useTimer(!isEscape)

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
      setfeedback("")
      setIsHintsShown(false)
    } else {
      setfeedback("Not quite,try again!")
    }
  }
  function handleHints() {
    setCount(count + 1)
    setIsHintsShown((prev) => !prev)
  }
  useEffect(() => {
    if (isEscape) {
      navigate(`/rooms/${roomId}/results`, {
        state: {
          time,
          isEscape,
          puzzleCount: room.puzzles.length,
          Count: count,
        },
      })
    }
  }, [isEscape, navigate, roomId, count, room.puzzles.length, time])

  return (
    <div className="bg-elevated px-6 py-7 border border-border rounded-2xl m-8 "> 
        <div className="flex justify-between items-center mb-5 font-serif gap-3 ">
          <h2 className="text-text text-3xl font-bold ">{room.title}</h2>
          <Button variant="primary" onClick={() => navigate(`/rooms/${roomId}`)}>Back to Room</Button>
          <p className="text-accent font-bold text-xl  md:text-medium">{time}</p>
        </div>
        <p className="text-muted  text-sm font-sans">Puzzle {currentIndex + 1} of {room.puzzles.length}</p>
        <h2 className="text-2xl text-bold tracking-wide font-serif text-amber-50 my-3">{currentPuzzle?.question}</h2>
        <form onSubmit={HandleAnswer}>
          <input
            value={answer}
            onChange={(e) => setAnswer(e.currentTarget.value)}
            placeholder="Enter your answer..."
            className="border border-accent rounded-2xl focus:border-accent text-muted text-lg  w-100 md:w-200  h-auto px-2 mr-6 "
          ></input>
          <Button variant="primary" className="w-20 h-auto">Submit</Button>
        </form>
        {feedback && <p className="text-red-500 tracking-wide">{feedback}</p>}
        <div className="mt-5">
          <Button onClick={handleHints} variant="secondary">hints</Button>
        </div>
        {isHintsShown ? (
          <p className="text-muted text-sm bg-surface my-3 px-3 py-2 border border-transparent rounded-2xl">
            {currentPuzzle?.hint}
          </p>
        ) : null}
      </div>
  )
}