import { useContext, useState } from "react"
import { RoomContext } from "../context/RoomContext"
import Button from "../shared/Button"
export default function RoomSettingsOverview(){
    const {room,roomId,myRooms,setMyRooms}=useContext(RoomContext)
    const [title,setTitle]=useState(room.title)
    const [description,setDescription]=useState(room.description)
    const [difficulty,setDifficulty]=useState(room.difficulty)
    const [timeLimit,setTimeLimit]=useState(room.timeLimit)
    function handleSave(e){
        e.preventDefault()
        const updatedRoom={...room,title,description,difficulty,timeLimit:Number(timeLimit)}
        const updatedRooms=myRooms.map(r=>r.id===roomId ?updatedRoom:r)
        setMyRooms(updatedRooms)
    }
    return(
       <section className=" font-sans  text-center m-4">
                   <h2 className="text-center text-3xl text-accent text-bold mb-6">Room Settings</h2>
               <form onSubmit={handleSave} className="flex flex-col gap-2 justify-center text-center items-center"> 
                   <label className="text-muted text-lg ">Room title</label> 
                   <input
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}  className="bg-surface border border-border  px-4 py-2 rounded-xl text-text w-full max-w-md mx-auto h-auto text-center focus:border-accent mb-3 capitalize"
                   /> 
                   <label className="text-muted text-lg ">Description</label>
                   <textarea  value={description}
                     onChange={(e) => setDescription(e.target.value)}  className="bg-surface border border-border focus:border-accent px-4 py-2 rounded-xl text-text w-full max-w-md mx-auto h-auto text-center mb-3 "
                   > </textarea>
                   <div>
                     <select
                       name="difficulty"
                       id="difficulty"
                       className=" px-4 py-2 text-text block mx-auto w-full max-w-xs appearance-none rounded-md border border-gray-300 bg-elevated shadow-sm focus:border-accent focus:outline-none focus:ring-accent mb-3"
                       spellCheck="false"
                       value={difficulty}
                       onChange={(e) => setDifficulty(e.target.value)}
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
                     value={timeLimit}
                     onChange={(e) => setTimeLimit(e.target.value)}  className="bg-surface border border-border focus:border-accent px-4 py-2 rounded-xl text-text  block w-full max-w-xs mx-auto h-auto text-center mb-3"
                   /> 
                   <div className="mb-5">
                   <Button variant="primary">Save Changes</Button>
                   </div>
               </form>
               </section>
    )
}