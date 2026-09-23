    
import Button from "../shared/Button"
import useLocalStorage from "../shared/useLocalStorage"
import { Link } from "react-router-dom"

import { DoorOpen, Pencil, Plus, Trash2 } from "lucide-react"

export default function MyRooms(){
    const [myRooms,setMyRooms]=useLocalStorage("my-rooms",[])
    function handleDeleteRoom(roomId){
        if (!window.confirm("Delete this room ?")) return
        const updatedRooms=myRooms.filter(r=>r.id!==roomId)
        setMyRooms(updatedRooms)
    }
    return(
        <section className="page-container py-8 sm:py-10 lg:py-12">
            <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        <DoorOpen size={17} aria-hidden="true" />
                        <span>Your collection</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">My rooms</h1>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
                        Create, refine, and manage the reading rooms you have built.
                    </p>
                </div>
                <Link
                    to="/create"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-background transition hover:bg-[#e2b45c] focus:outline-none focus:ring-2 focus:ring-accent/50 sm:w-auto"
                >
                    <Plus size={17} aria-hidden="true" />
                    New room
                </Link>
            </div>
            {myRooms.length === 0 ?
                <>
                    <div className="rounded-2xl border border-dashed border-border bg-surface/60 px-6 py-16 text-center sm:py-20">
                        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent">
                            <DoorOpen size={25} aria-hidden="true" />
                        </div>
                        <h2 className="mt-5 text-xl font-semibold text-text sm:text-2xl">Your rooms are waiting</h2>
                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
                            Build your first room and turn your favorite stories into a challenge.
                        </p>
                        <Link to="/create" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border border-accent px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-background focus:outline-none focus:ring-2 focus:ring-accent/40">
                            Create your first room
                        </Link>
                    </div>
                </>
                :
                <div className="grid gap-4 sm:gap-5">
                    {myRooms.map(room => (
                        <article
                            key={room.id}
                            className="flex flex-col gap-5 rounded-2xl border border-border bg-elevated p-5 transition hover:border-accent/60 hover:shadow-lg hover:shadow-black/15 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                        >
                            <div className="flex min-w-0 items-start gap-4">
                                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
                                    <DoorOpen size={20} aria-hidden="true" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="wrap-break-word text-lg font-semibold capitalize text-text sm:text-xl">{room.title}</h3>
                                    <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                                        <span>{room.puzzles?.length ?? 0} puzzles</span>
                                        <span aria-hidden="true">•</span>
                                        <span>{room.difficulty || "Unrated"}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="grid w-full grid-cols-2 gap-2 sm:w-auto sm:flex sm:shrink-0">
                                <Link
                                    to={`/rooms/${room.id}/edit`}
                                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-text transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                                >
                                    <Pencil size={15} aria-hidden="true" />
                                    Edit
                                </Link>
                                <Button variant="secondary" className="min-h-11 rounded-xl px-4 py-2 text-sm" onClick={() => handleDeleteRoom(room.id)}>
                                    <Trash2 size={15} aria-hidden="true" />
                                    Delete
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            }
        </section>
    )
}        
