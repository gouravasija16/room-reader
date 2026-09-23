import { ArrowLeft, Clock3, Puzzle, Timer } from "lucide-react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { sampleRooms } from "../../data/sampleRooms"
import DifficultyBadge from "../shared/DifficultyBadge"
import useLocalStorage from "../shared/useLocalStorage"
import formatTime from "../../utils/formatTime"
import Button from "../shared/Button"

export default function RoomDetails() {
    const navigate = useNavigate()
    const { roomId } = useParams()
    const [myRooms] = useLocalStorage("my-rooms", [])
    const allRooms = [...sampleRooms, ...myRooms]
    const room = allRooms.find((item) => item.id === roomId)
    const [bestTime] = useLocalStorage(`best-time-${roomId}`, null)

    return (
        <main className="page-container py-8 sm:py-12">
            <Link
                to="/rooms"
                className="mb-6 inline-flex items-center gap-2 rounded-lg py-2 text-sm font-medium text-muted transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent sm:mb-8"
            >
                <ArrowLeft size={17} aria-hidden="true" />
                Back to rooms
            </Link>

            {room ? (
                <article className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-elevated shadow-2xl shadow-black/20">
                    <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
                        <div className="relative flex min-h-72 flex-col justify-end overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(212,162,76,0.32),transparent_42%),linear-gradient(145deg,#252c32,#101316)] p-6 sm:min-h-96 sm:p-9">
                            {room.coverImage && (
                                <img
                                    src={room.coverImage}
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                                />
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />
                            <div className="relative">
                                <DifficultyBadge difficulty={room.difficulty} />
                                <h1 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
                                    {room.title}
                                </h1>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 p-5 sm:p-8">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                                    Your next escape
                                </p>
                                <p className="mt-3 text-base leading-7 text-muted sm:text-lg">
                                    {room.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-2xl border border-border bg-surface p-4">
                                    <Puzzle size={18} className="mb-3 text-accent" aria-hidden="true" />
                                    <p className="text-xl font-semibold text-text">{room.puzzleCount}</p>
                                    <p className="mt-1 text-xs text-muted sm:text-sm">Puzzles</p>
                                </div>
                                <div className="rounded-2xl border border-border bg-surface p-4">
                                    <Timer size={18} className="mb-3 text-accent" aria-hidden="true" />
                                    <p className="text-xl font-semibold text-text">{room.timeLimit} min</p>
                                    <p className="mt-1 text-xs text-muted sm:text-sm">Time limit</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 border-t border-border pt-5">
                                <Clock3 size={19} className="shrink-0 text-accent" aria-hidden="true" />
                                <div>
                                    <p className="text-xs text-muted">Your best time</p>
                                    {bestTime ? (
                                        <p className="mt-1 text-lg font-bold text-text">{formatTime(bestTime)}</p>
                                    ) : (
                                        <p className="mt-1 text-sm font-medium text-text">Not attempted yet</p>
                                    )}
                                </div>
                            </div>

                            <Button
                                onClick={() => navigate(`/rooms/${room.id}/play`)}
                                variant="primary"
                                className="mt-auto min-h-12"
                            >
                                Start room
                            </Button>
                        </div>
                    </div>
                </article>
            ) : (
                <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-elevated px-6 py-12 text-center sm:px-10">
                    <h1 className="text-2xl font-bold text-text">Room not found</h1>
                    <p className="mt-2 text-muted">The room may have been removed or the link is incorrect.</p>
                </div>
            )}
        </main>
    )
}
