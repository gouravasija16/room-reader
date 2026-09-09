import { sampleRooms } from "../../data/sampleRooms"
import RoomGrid from "../shared/RoomGrid"
import { useSearchParams } from "react-router-dom"

export default function Rooms() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("search") || ""
    const difficultyFilter = searchParams.get("difficulty") || "All"

    const handleRoomSearch = (event) => {
        const value = event.target.value
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev)

            if (value) {
                next.set("search", value)
            } else {
                next.delete("search")
            }

            return next
        })
    }

    const handleDifficultyChange = (event) => {
        const value = event.target.value
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev)
            if (value === "All") {
                next.delete("difficulty")
            } else {
                next.set("difficulty", value)
            }

            return next
        })
    }

    return (
        <section className='text-center px-8 py-5 bg-background'>
            <h2 className='text-4xl font-bold text-text mb-7'>Discover Rooms</h2>
            <div className="flex gap-8 mb-6 ">
            <input
                value={typeFilter}
                onChange={handleRoomSearch}
                placeholder="Search rooms..."
                className="bg-surface border border-border focus:border-accent px-4 py-2 rounded-lg text-text w-250 h-auto"
            />

            <select
                name="difficulty"
                id="difficulty"
                value={difficultyFilter}
                onChange={handleDifficultyChange}
                className="bg-surface border border-border px-4 py-2 rounded-lg text-text focus:border-accent"
                spellCheck="false"
            >
                <option value="All">All</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
        </div>
            <RoomGrid
                rooms={sampleRooms.filter((room) =>
                    room.title.toLowerCase().includes(typeFilter.toLowerCase()) &&
                    (difficultyFilter === "All" || room.difficulty === difficultyFilter)
                )}
            />
        </section>
    )
}