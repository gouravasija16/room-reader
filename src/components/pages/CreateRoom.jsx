import Button from "../shared/Button"
import useLocalStorage from "../shared/useLocalStorage"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
import getRandomFallbackImages from "../../utils/fallbackImages"
export default function CreateRoom(){
  const [createRoom,setCreateRoom]=useState({
    title:"",
    description:"",
    difficulty:"",
    timeLimit:"",
    coverImage:""
  })
  const [errors,setErrors]=useState({})
  const [myRooms,setMyRooms]=useLocalStorage("my-rooms",[])
  const navigate=useNavigate()

  function HandleCreateRoom(e){
    e.preventDefault()
    const title = createRoom.title.trim()
    const description = createRoom.description.trim()
    const timeLimit = Number(createRoom.timeLimit)
    const nextErrors={}

    if(!title) nextErrors.title="Enter a room title."
    if(!description) nextErrors.description="Enter a room description."
    if(!createRoom.difficulty) nextErrors.difficulty="Choose a difficulty."
    if(!Number.isInteger(timeLimit) || timeLimit < 1) {
      nextErrors.timeLimit="Enter a whole number of at least 1 minute."
    }
    if(createRoom.coverImage.trim() && !createRoom.coverImage.trim().startsWith("/images/")) {
      try {
        new URL(createRoom.coverImage.trim())
      } catch {
        nextErrors.coverImage="Enter a valid image URL, or leave this field empty."
      }
    }

    setErrors(nextErrors)
    if(Object.keys(nextErrors).length > 0){
        return
    }
    const newRoom = {
        id: Date.now().toString(),
        title:title,
        description:description,
        difficulty:createRoom.difficulty,
        timeLimit:timeLimit,
        coverImage:getRandomFallbackImages(),
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
              aria-invalid={Boolean(errors.title)}
              aria-describedby={errors.title ? "room-title-error" : undefined}
            />
            {errors.title && <p id="room-title-error" className="mb-4 text-sm text-red-400">{errors.title}</p>}
            <label htmlFor="room-description" className="text-sm font-medium text-muted sm:text-base">Description</label>
            <textarea
              id="room-description"
              value={createRoom.description}
              onChange={(e) => setCreateRoom({ ...createRoom, description: e.target.value })}
              rows="4"
              className="mb-4 min-h-28 w-full resize-y rounded-xl border border-border bg-surface px-4 py-2 text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:mb-5"
              aria-invalid={Boolean(errors.description)}
              aria-describedby={errors.description ? "room-description-error" : undefined}
            />
            {errors.description && <p id="room-description-error" className="mb-4 text-sm text-red-400">{errors.description}</p>}
            <label htmlFor="room-cover-image" className="text-sm font-medium text-muted sm:text-base">Cover image URL <span className="font-normal">(optional)</span></label>
            <input
              id="room-cover-image"
              type="text"
              value={createRoom.coverImage}
              onChange={(e) => setCreateRoom({ ...createRoom, coverImage: e.target.value })}
              placeholder="https://example.com/your-room-image.jpg"
              className="mb-1 h-11 w-full rounded-xl border border-border bg-surface px-4 py-2 text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              aria-invalid={Boolean(errors.coverImage)}
              aria-describedby={errors.coverImage ? "room-cover-image-error" : "room-cover-image-help"}
            />
            <p id="room-cover-image-help" className="mb-4 text-xs text-muted">Use a public image URL. You can also use a local path such as /images/room.jpg.</p>
            {errors.coverImage && <p id="room-cover-image-error" className="mb-4 text-sm text-red-400">{errors.coverImage}</p>}
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
                aria-invalid={Boolean(errors.difficulty)}
                aria-describedby={errors.difficulty ? "difficulty-error" : undefined}
              >
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>   
              </select>
              {errors.difficulty && <p id="difficulty-error" className="text-sm text-red-400">{errors.difficulty}</p>}
              </div>
              <div className="flex flex-col gap-2">
            <label htmlFor="time-limit" className="text-sm font-medium text-muted sm:text-base">Time Limit (minutes)</label>
            <input
              id="time-limit"
              type="number"
              min="1"
              value={createRoom.timeLimit}
              onChange={(e) => setCreateRoom({ ...createRoom, timeLimit: e.target.value })}  className="h-11 w-full rounded-xl border border-border bg-surface px-4 py-2 text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              aria-invalid={Boolean(errors.timeLimit)}
              aria-describedby={errors.timeLimit ? "time-limit-error" : undefined}
            /> 
            {errors.timeLimit && <p id="time-limit-error" className="text-sm text-red-400">{errors.timeLimit}</p>}
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