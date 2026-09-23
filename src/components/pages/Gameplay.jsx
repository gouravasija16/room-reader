import { useEffect, useState } from "react"
import { ArrowLeft, CheckCircle2, Clock3, Lightbulb, Send } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import { sampleRooms } from "../../data/sampleRooms"
import Button from "../shared/Button"
import useLocalStorage from "../shared/useLocalStorage"
import useTimer from "../shared/useTimer"

export default function Gameplay() {
  const navigate = useNavigate()
  const { roomId } = useParams()
  const [myRooms] = useLocalStorage("my-rooms", [])
  const room = [...sampleRooms, ...myRooms].find((item) => item.id === roomId)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState("")
  const [feedback, setFeedback] = useState("")
  const [isHintsShown, setIsHintsShown] = useState(false)
  const [count, setCount] = useState(0)

  const currentPuzzle = room?.puzzles?.[currentIndex]
  const isEscape = room ? currentIndex >= room.puzzles.length : false
  const { formatted: time, seconds } = useTimer(!isEscape && Boolean(room))
  const progress = room ? (currentIndex / room.puzzles.length) * 100 : 0

  function handleAnswer(event) {
    event.preventDefault()
    const isCorrect = answer.toLowerCase().trim() === currentPuzzle?.answer.toLowerCase().trim()

    if (isCorrect) {
      setCurrentIndex((prev) => prev + 1)
      setAnswer("")
      setFeedback("")
      setIsHintsShown(false)
    } else {
      setFeedback("Not quite yet. Check your answer and try again.")
    }
  }

  function handleHints() {
    setCount((prev) => prev + 1)
    setIsHintsShown((prev) => !prev)
  }

  useEffect(() => {
    if (!isEscape || !room) return

    navigate(`/rooms/${roomId}/results`, {
      state: {
        time,
        seconds,
        puzzleCount: room.puzzles.length,
        Count: count,
      },
    })
  }, [isEscape, navigate, room, roomId, count, time, seconds])

  if (!room) {
    return (
      <main className="page-container flex min-h-[60vh] items-center justify-center py-12">
        <div className="w-full max-w-lg rounded-3xl border border-border bg-elevated p-8 text-center shadow-2xl">
          <h1 className="text-2xl font-bold text-text">Room not found</h1>
          <p className="mt-2 text-muted">This room may have been removed or is no longer available.</p>
          <Button variant="secondary" className="mt-6" onClick={() => navigate("/rooms")}>
            Browse rooms
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="page-container py-5 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <header className="mb-5 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <button
              type="button"
              className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
              onClick={() => navigate(`/rooms/${roomId}`)}
            >
              <ArrowLeft size={16} />
              Exit room
            </button>
            <h1 className="truncate font-serif text-2xl font-bold text-text sm:text-3xl">{room.title}</h1>
          </div>
          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-accent">
              <Clock3 size={17} />
              <span className="font-mono text-lg font-semibold tracking-wide">{time}</span>
            </div>
            <span className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              In progress
            </span>
          </div>
        </header>

        <div className="mb-5 flex items-center justify-between gap-4 text-sm text-muted">
          <span>
            Puzzle <strong className="text-text">{Math.min(currentIndex + 1, room.puzzles.length)}</strong> of{" "}
            {room.puzzles.length}
          </span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="mb-6 h-2 overflow-hidden rounded-full bg-surface sm:mb-8" aria-label={`${Math.round(progress)}% complete`}>
          <div className="h-full rounded-full bg-accent transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>

        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <div className="rounded-3xl border border-border bg-elevated p-5 shadow-2xl sm:p-8">
            <div className="mb-7 flex items-center gap-2 text-sm font-medium text-accent">
              <CheckCircle2 size={17} />
              <span>Crack the clue</span>
            </div>
            <h2 className="max-w-3xl font-serif text-2xl font-semibold leading-snug text-text sm:text-3xl">
              {currentPuzzle?.question}
            </h2>

            <form onSubmit={handleAnswer} className="mt-8">
              <label htmlFor="answer" className="mb-2 block text-sm font-medium text-muted">
                Your answer
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="answer"
                  value={answer}
                  onChange={(event) => setAnswer(event.currentTarget.value)}
                  placeholder="Type your answer..."
                  autoComplete="off"
                  className="min-w-0 flex-1 rounded-2xl border border-border bg-surface px-4 py-3 text-base text-text outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
                <Button type="submit" variant="primary">
                  <Send size={16} />
                  Submit
                </Button>
              </div>
              {feedback && (
                <p role="alert" className=" feedback-enter mt-3 text-sm font-medium text-red-400">
                  {feedback}
                </p>
              )}
            </form>

            <div className="mt-8 border-t border-border pt-5">
              <button
                type="button"
                onClick={handleHints}
                aria-expanded={isHintsShown}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-text"
              >
                <Lightbulb size={17} />
                {isHintsShown ? "Hide hint" : "Need a hint?"}
              </button>
              {isHintsShown && (
                <p className="mt-3 rounded-2xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted">
                  {currentPuzzle?.hint}
                </p>
              )}
            </div>
          </div>

          <aside className="grid grid-cols-2 gap-3 lg:block lg:space-y-3">
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Solved</p>
              <p className="mt-2 text-2xl font-bold text-text">{currentIndex}</p>
              <p className="text-xs text-muted">puzzles</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Hints used</p>
              <p className="mt-2 text-2xl font-bold text-text">{count}</p>
              <p className="text-xs text-muted">this attempt</p>
            </div>
            <p className="col-span-2 px-1 text-xs leading-relaxed text-muted lg:pt-3">
              Take your time. Your fastest completion will be saved automatically.
            </p>
          </aside>
        </section>
      </div>
    </main>
  )
}