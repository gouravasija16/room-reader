import Confetti from "react-confetti"
import { ArrowLeft, Clock3, Lightbulb, PartyPopper, RotateCcw } from "lucide-react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import Button from "../shared/Button"
import useLocalStorage from "../shared/useLocalStorage"
import formatTime from "../../utils/formatTime"

export default function Results() {
  const { roomId } = useParams()
  const [reducedMotion] = useLocalStorage("reduced-motion", false)
  const [bestTime, setBestTime] = useLocalStorage(`best-time-${roomId}`, null)
  const { state } = useLocation()
  const navigate = useNavigate()
  const result = state || { time: "00:00", seconds: 0, puzzleCount: 0, Count: 0 }
  const isNewBest = bestTime === null || result.seconds < bestTime

  useEffect(() => {
    if (isNewBest && result.seconds > 0) {
      setBestTime(result.seconds)
    }
  }, [isNewBest, result.seconds, setBestTime])

  return (
    <main className="page-container flex min-h-[65vh] items-center justify-center py-10 sm:py-16">
      {!reducedMotion && <Confetti recycle={false} numberOfPieces={260} width={window.innerWidth} height={window.innerHeight} />}
      <section className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-elevated p-6 text-center shadow-2xl sm:p-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent" />
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-accent/15 text-accent sm:h-20 sm:w-20">
          <PartyPopper size={34} strokeWidth={1.7} />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Room complete</p>
        <h1 className="mt-3 font-serif text-3xl font-bold text-text sm:text-4xl">You escaped!</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          Great work. Every puzzle is solved and the door is open.
        </p>

        <div className="mt-8 rounded-2xl border border-accent/25 bg-accent/10 px-5 py-5">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted">
            <Clock3 size={16} />
            Your completion time
          </div>
          <p className="mt-2 font-mono text-4xl font-bold tracking-wider text-accent sm:text-5xl">{result.time}</p>
          {bestTime !== null && (
            <p className="mt-2 text-xs font-medium text-muted">
              {isNewBest ? "New personal best!" : `Best time: ${formatTime(bestTime)}`}
            </p>
          )}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 text-left">
          <div className="rounded-2xl border border-border bg-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Puzzles solved</p>
            <p className="mt-2 text-2xl font-bold text-text">{result.puzzleCount}</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Hints used</p>
            <p className="mt-2 text-2xl font-bold text-text">{result.Count}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button onClick={() => navigate(`/rooms/${roomId}/play`)} variant="primary">
            <RotateCcw size={16} />
            Play again
          </Button>
          <Button onClick={() => navigate("/rooms")} variant="secondary">
            <ArrowLeft size={16} />
            Browse rooms
          </Button>
        </div>
        <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted">
          <Lightbulb size={14} className="text-accent" />
          Ready for another challenge?
        </p>
      </section>
    </main>
  )
}
