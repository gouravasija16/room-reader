import { sampleRooms } from "../../data/sampleRooms"
import RoomGrid from "../shared/RoomGrid"
import { useSearchParams } from "react-router-dom"
import useLocalStorage from "../shared/useLocalStorage"
import { DoorOpen, Search, SlidersHorizontal } from "lucide-react"
export default function Rooms() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("search") || ""
    const difficultyFilter = searchParams.get("difficulty") || "All"
    const [myRooms]=useLocalStorage('my-rooms',[])
    const allRooms=[...sampleRooms,...myRooms]
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

    const rooms = allRooms.filter((room) =>
        room.title.toLowerCase().includes(typeFilter.toLowerCase()) &&
        (difficultyFilter === "All" || room.difficulty === difficultyFilter)
    )

    return (
        <section className='page-container py-8 text-center sm:py-10'>
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                            <DoorOpen size={17} aria-hidden="true" />
                            <span>Escape the ordinary</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                            Discover rooms
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
                            Choose a challenge, gather your team, and solve your way out before time runs out.
                        </p>
                    </div>
                    <p className="text-sm text-muted sm:pb-1">
                        <span className="font-semibold text-text">{rooms.length}</span>{" "}
                        {rooms.length === 1 ? "room" : "rooms"} available
                    </p>
                </div>

                <div className="mb-8 rounded-2xl border border-border bg-surface p-3 shadow-sm sm:p-4">
                      <div className="mb-6 flex flex-col gap-3 shadow-sm sm:flex-row sm:gap-6">
                        <label className="relative min-w-0 flex-1">
                            <span className="sr-only">Search rooms</span>
                            <Search
                                size={18}
                                aria-hidden="true"
                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                            />
                            <input
                                value={typeFilter}
                                onChange={handleRoomSearch}
                                placeholder="Search by room name..."
                                className="h-12 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-sm text-text outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
                            />
                        </label>

                        <label className="relative sm:w-48">
                            <span className="sr-only">Filter by difficulty</span>
                            <SlidersHorizontal
                                size={17}
                                aria-hidden="true"
                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                            />
                            <select
                                name="difficulty"
                                id="difficulty"
                                value={difficultyFilter}
                                onChange={handleDifficultyChange}
                                className="h-12 w-full appearance-none rounded-xl border border-border bg-background pl-11 pr-4 text-sm text-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                            >
                                <option value="All">All difficulties</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </label>
                    </div>
                </div>

                {rooms.length > 0 ? (
                    <RoomGrid rooms={rooms} />
                ) : (
                    <div className="rounded-2xl border border-dashed border-border bg-surface/60 px-6 py-16 text-center">
                        <DoorOpen className="mx-auto mb-4 text-muted" size={32} aria-hidden="true" />
                        <h2 className="text-xl font-semibold text-text">No rooms found</h2>
                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
                            Try a different search term or reset the difficulty filter to see more rooms.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}