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
        <section className=" font-sans  text-center m-4">
            <h2 className="text-center text-3xl text-accent text-bold mb-5">Create a New Room</h2>
        <form onSubmit={(e)=>HandleCreateRoom(e)} className="flex flex-col gap-3 justify-center text-center items-center"> 
            <label className="text-muted text-lg ">Room title</label> 
            <input
              value={createRoom.title}
              onChange={(e) => setCreateRoom({ ...createRoom, title: e.target.value })}  className="bg-surface border border-border  px-4 py-2 rounded-xl text-text w-full max-w-md mx-auto h-auto text-center focus:border-accent mb-3 capitalize"
            /> 
            <label className="text-muted text-lg ">Description</label>
            <textarea  value={createRoom.description}
              onChange={(e) => setCreateRoom({ ...createRoom, description: e.target.value })}  className="bg-surface border border-border focus:border-accent px-4 py-2 rounded-xl text-text w-full max-w-md mx-auto h-auto text-center mb-3 "
            > </textarea>
            <div>
              <select
                name="difficulty"
                id="difficulty"
                className=" px-4 py-2 text-text block mx-auto w-full max-w-xs appearance-none rounded-md border border-gray-300 bg-elevated shadow-sm focus:border-accent focus:outline-none focus:ring-accent mb-3"
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
            <label className="text-muted text-lg ">Time Limit (minutes)</label>
            <input
              type="number"
              value={createRoom.timeLimit}
              onChange={(e) => setCreateRoom({ ...createRoom, timeLimit: e.target.value })}  className="bg-surface border border-border focus:border-accent px-4 py-2 rounded-xl text-text  block w-full max-w-xs mx-auto h-auto text-center mb-3"
            /> 
            <div className="mb-5">
            <Button variant="primary">Create Room</Button>
            </div>
        </form>
        </section>
    )
}