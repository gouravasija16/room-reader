import { Volume2, VolumeX, Zap, Trash2 } from "lucide-react"
import useLocalStorage from "../shared/useLocalStorage.jsx"
import Button from "../shared/Button.jsx"
import { logout } from "../../auth.jsx"
import { useNavigate } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

export default function Settings() {
    const { isMuted, setIsMuted } = useOutletContext()
    const [reducedMotion, setReducedMotion] = useLocalStorage('reduced-motion', false)
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate('/login')
    }

    function handleClearData() {
        if (!window.confirm("This will delete all your created rooms,best times, and history. This cannot be undone. Continue?")) return
        localStorage.clear()
        window.location.reload()
    }

    return (
        <main className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
            <div className="flex flex-col gap-6">
                <div>
                    <h2 className="text-2xl font-bold text-text sm:text-3xl">Settings</h2>
                    <p className="mt-2 text-sm text-muted sm:text-base">
                        Manage your preferences and local Room Reader data.
                    </p>
                </div>

                <div className="grid gap-4 sm:gap-5">
                    <section className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                        <div>
                            <h3 className="text-lg font-semibold">Background Music</h3>
                            <p className="mt-1 text-sm text-muted">Control ambient music while you use the app.</p>
                        </div>
                        <Button variant="primary" onClick={() => setIsMuted(!isMuted)}>
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            {isMuted ? "Unmute Music" : "Mute Music"}
                        </Button>
                    </section>

                    <section className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                        <div>
                            <h3 className="text-lg font-semibold">Motion</h3>
                            <p className="mt-1 text-sm text-muted">Reduce visual effects and animations across the app.</p>
                        </div>
                        <Button variant="secondary" onClick={() => setReducedMotion(!reducedMotion)}>
                            <Zap size={20} />
                            {reducedMotion ? 'Enable Animations' : 'Reduce Motion'}
                        </Button>
                    </section>

                    <section className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                        <div>
                            <h3 className="text-lg font-semibold">Clear Data</h3>
                            <p className="mt-1 text-sm text-muted">Delete your created rooms, best times, and history.</p>
                        </div>
                        <Button variant="secondary" onClick={handleClearData}>
                            <Trash2 size={20} />
                            Clear All Local Data
                        </Button>
                    </section>
                </div>

                <div className="flex justify-stretch sm:justify-end">
                    <Button onClick={handleLogout} variant="primary">Logout</Button>
                </div>

                <div className="space-y-2 border-t border-border pt-4">
                    <p className="text-sm text-muted">Your motion preference is saved in local storage and persists across sessions.</p>
                    <p className="text-lg tracking-wide text-muted">More settings coming soon.</p>
                </div>
            </div>
        </main>
       
    )
}