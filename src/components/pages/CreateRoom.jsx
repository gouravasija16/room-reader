import Button from "../shared/Button"
import useLocalStorage from "../shared/useLocalStorage"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
export default function CreateRoom(){
  const [createRoom,setCreateRoom]=useState({
    title:"",
    description:"",
    difficulty:"",
    timeLimit:""
  })
  const [myRooms,setMyRooms]=useLocalStorage("my-rooms",[])
  const navigate=useNavigate()

  function HandleCreateRoom(e){
    e.preventDefault()
    const { title, description, difficulty, timeLimit } = createRoom
    if(!title || !description || !difficulty || !timeLimit){
        alert("Please fill in all fields")
        return
    }
    const newRoom = {
        id: Date.now().toString(),
        title:title,
        description:description,
        difficulty:difficulty,
        timeLimit:timeLimit,
        puzzles: []
    }
    setMyRooms([...myRooms,newRoom])
    navigate(`/rooms/${newRoom.id}/edit`)
  }
    return(
        <section className="min-h-[calc(100vh-4rem)] bg-background px-4 py-8 font-sans text-text sm:px-6 sm:py-12">
          <div className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-elevated p-5 shadow-lg sm:p-8">
            <h2 className="mb-2 text-center text-2xl font-bold text-accent sm:text-3xl">Create a New Room</h2>
            <p className="mb-8 text-center text-sm text-muted sm:text-base">
              Set up the details for your next reading room.
            </p>
        <form onSubmit={(e)=>HandleCreateRoom(e)} className="flex flex-col gap-2"> 
            <label htmlFor="room-title" className="text-sm font-medium text-muted sm:text-base">Room title</label> 
            <input
              id="room-title"
              value={createRoom.title}
              onChange={(e) => setCreateRoom({ ...createRoom, title: e.target.value })}  className="mb-4 h-11 w-full rounded-xl border border-border bg-surface px-4 py-2 text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:mb-5"
            /> 
            <label htmlFor="room-description" className="text-sm font-medium text-muted sm:text-base">Description</label>
            <textarea
              id="room-description"
              value={createRoom.description}
              onChange={(e) => setCreateRoom({ ...createRoom, description: e.target.value })}
              rows="4"
              className="mb-4 min-h-28 w-full resize-y rounded-xl border border-border bg-surface px-4 py-2 text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:mb-5"
            > </textarea>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="difficulty" className="text-sm font-medium text-muted sm:text-base">Difficulty</label>
              <select
                name="difficulty"
                id="difficulty"
                className="h-11 w-full appearance-none rounded-xl border border-border bg-surface px-4 py-2 text-text shadow-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                spellCheck="false"
                value={createRoom.difficulty}
                onChange={(e) => setCreateRoom({ ...createRoom, difficulty: e.target.value })}
              >
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>   
              </select>
              </div>
              <div className="flex flex-col gap-2">
            <label htmlFor="time-limit" className="text-sm font-medium text-muted sm:text-base">Time Limit (minutes)</label>
            <input
              id="time-limit"
              type="number"
              min="1"
              value={createRoom.timeLimit}
              onChange={(e) => setCreateRoom({ ...createRoom, timeLimit: e.target.value })}  className="h-11 w-full rounded-xl border border-border bg-surface px-4 py-2 text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            /> 
              </div>
            </div>
            <div className="mt-6 flex justify-end sm:mt-8">
            <Button variant="primary">Create Room</Button>
            </div>
        </form>
          </div>
        </section>
    )
}