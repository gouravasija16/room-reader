import { Link } from "react-router-dom"
import { sampleRooms } from "../../data/sampleRooms"
import useLocalStorage from "../shared/useLocalStorage"
import formatTime from "../../utils/formatTime"
import { ArrowRight, Clock3, History as HistoryIcon, Trophy } from "lucide-react"

export default function History(){
    const [myRooms]=useLocalStorage('my-rooms',[])
    const allRooms=[...sampleRooms,...myRooms]
    const playedRooms= allRooms.map(room=>({
        ...room,
        bestTime:JSON.parse(localStorage.getItem(`best-time-${room.id}`)|| 'null')
    }))
    .filter(room=>room.bestTime !==null)
    return(
        <section className="page-container py-8 sm:py-10 lg:py-12">
            <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        <HistoryIcon size={17} aria-hidden="true" />
                        <span>Your progress</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">Play history</h1>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
                        Keep an eye on your fastest solves and revisit rooms whenever you are ready for another challenge.
                    </p>
                </div>
                {playedRooms.length > 0 && (
                    <p className="text-sm text-muted sm:pb-1">
                        <span className="font-semibold text-text">{playedRooms.length}</span>{" "}
                        {playedRooms.length === 1 ? "room completed" : "rooms completed"}
                    </p>
                )}
            </div>

            {playedRooms.length ? (
                <div className="grid gap-4 sm:gap-5">
                {playedRooms.map(room => (
                    <article key={room.id} className="group flex flex-col gap-5 rounded-2xl border border-border bg-elevated p-5 transition hover:border-accent/60 hover:shadow-lg hover:shadow-black/15 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                        <div className="flex min-w-0 items-start gap-4">
                            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
                                <Trophy size={20} aria-hidden="true" />
                            </div>
                            <div className="min-w-0">
                                <h2 className="wrap-break-word text-lg font-semibold capitalize text-text sm:text-xl">{room.title}</h2>
                                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                                    <span className="inline-flex items-center gap-1.5">
                                        <Clock3 size={14} aria-hidden="true" />
                                        Best time: <strong className="font-semibold text-text">{formatTime(room.bestTime)}</strong>
                                    </span>
                                    <span aria-hidden="true" className="hidden sm:inline">•</span>
                                    <span>{room.puzzles?.length ?? room.puzzleCount ?? 0} puzzles</span>
                                </div>
                            </div>
                        </div>
                        <Link to={`/rooms/${room.id}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-text transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40 sm:shrink-0">
                            View room
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </article>
                ))}
                </div>
            ) : (
                <div className="rounded-2xl border border-dashed border-border bg-surface/60 px-6 py-16 text-center sm:py-20">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent">
                        <Clock3 size={25} aria-hidden="true" />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold text-text sm:text-2xl">No completed rooms yet</h2>
                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
                        Your best times will appear here after you complete a room.
                    </p>
                    <Link to="/rooms" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-[#e2b45c] focus:outline-none focus:ring-2 focus:ring-accent/50">
                        Browse rooms
                    </Link>
                </div>
            )}
        </section>
        )
}