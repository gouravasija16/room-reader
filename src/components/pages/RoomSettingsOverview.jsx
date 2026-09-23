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
       <section className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-elevated p-5 font-sans text-center sm:p-8">
                   <h2 className="mb-6 text-center text-2xl font-bold text-accent sm:text-3xl">Room Settings</h2>
               <form onSubmit={handleSave} className="flex flex-col items-stretch gap-2 text-left">
                   <label htmlFor="room-title" className="text-sm font-medium text-muted sm:text-base">Room title</label> 
                   <input
                     id="room-title"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}  className="mb-3 h-11 w-full rounded-xl border border-border bg-surface px-4 py-2 text-text focus:border-accent capitalize"
                   /> 
                   <label htmlFor="room-description" className="text-sm font-medium text-muted sm:text-base">Description</label>
                   <textarea  value={description}
                     id="room-description"
                     rows="4"
                     onChange={(e) => setDescription(e.target.value)}  className="mb-3 min-h-28 w-full resize-y rounded-xl border border-border bg-surface px-4 py-2 text-text focus:border-accent "
                   > </textarea>
                   <div>
                     <label htmlFor="difficulty" className="mb-2 block text-sm font-medium text-muted sm:text-base">Difficulty</label>
                     <select
                       name="difficulty"
                       id="difficulty"
                       className="mb-3 block w-full appearance-none rounded-md border border-border bg-surface px-4 py-2 text-text shadow-sm focus:border-accent focus:outline-none focus:ring-accent"
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
                   <label htmlFor="time-limit" className="text-sm font-medium text-muted sm:text-base">Time Limit (minutes)</label>
                   <input
                     id="time-limit"
                     type="number"
                     value={timeLimit}
                     onChange={(e) => setTimeLimit(e.target.value)}  className="mb-3 block w-full rounded-xl border border-border bg-surface px-4 py-2 text-text focus:border-accent"
                   /> 
                   <div className="mt-2">
                   <Button variant="primary">Save Changes</Button>
                   </div>
               </form>
            </section>
     )
}