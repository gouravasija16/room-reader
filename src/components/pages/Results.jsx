import Confetti from "react-confetti"
import { useLocation,useParams,useNavigate } from "react-router-dom"
import Button from "../shared/Button"
export default function Results(){
    const {roomId}=useParams()
    const location=useLocation()
    const {time,puzzleCount,Count}=location.state
    const navigate=useNavigate()
    function handlePlayAgain(){
        navigate(`/rooms/${roomId}`)
    }
    function handleBrowseRooms(){
        navigate(`/rooms`)
    }
    return(
        <section className="flex flex-col justify-center items-center min-h-screen  tracking-wider">
           <h2 className="text-3xl font-bold text-accent tracking-wide font-sans text-center my-1">You Escaped! 🎉 </h2>
           <p className="text-muted text-lg my-3">Great job! You solved all the puzzles.</p>
           <Confetti width={window.innerWidth} height={window.innerHeight} />
              <h3 className="text-sm text-muted">Your Time</h3>
              <p className="text-accent text-4xl font-bold" >{time}</p>
            <div className="flex gap-6 my-3">
               <p className="bg-surface border  border-transparent rounded-lg px-4 py-2 text-lg text-muted"><span  className="text-bold text-accent text-xl">{puzzleCount} </span>puzzles solved</p>
               <p className="bg-surface border border-transparent rounded-lg px-4 py-2 text-lg text-muted"><span className="text-bold text-accent text-xl">{Count}</span> hints used</p>
           </div>
           <div className="flex gap-4 my-5">
            <Button onClick={handlePlayAgain} variant="primary">
                Play Again
            </Button>
            <Button onClick={handleBrowseRooms} variant="secondary">
                Browse Rooms
            </Button>
           </div>
        </section>
    )
}