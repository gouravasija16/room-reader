import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import {
    Clock3,
    DoorOpen,
    FolderOpen,
    Home,
    Menu,
    Plus,
    Settings,
    Sparkles,
    UserRound,
    X,
} from "lucide-react"

const navigationItems = [
    { label: "Home", to: "/", icon: Home, end: true },
    { label: "Rooms", to: "/rooms", icon: DoorOpen },
    { label: "My rooms", to: "/myrooms", icon: FolderOpen },
    { label: "History", to: "/history", icon: Clock3 },
    { label: "Settings", to: "/settings", icon: Settings },
]

function NavigationLink({ item, onClick, mobile = false }) {
    const Icon = item.icon

    return (
        <NavLink
            to={item.to}
            end={item.end}
            onClick={onClick}
            className={({ isActive }) =>
                [
                    "group flex items-center gap-2 rounded-full font-medium transition-all duration-200",
                    mobile ? "w-full px-4 py-3 text-sm" : "px-3 py-2 text-sm",
                    isActive
                        ? "bg-accent/12 text-accent shadow-[inset_0_0_0_1px_rgba(212,162,76,0.18)]"
                        : "text-muted hover:bg-elevated hover:text-text",
                ].join(" ")
            }
        >
            <Icon size={16} strokeWidth={1.8} className="shrink-0 transition-transform group-hover:scale-110" />
            <span>{item.label}</span>
        </NavLink>
    )
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 border-b border-border/80 bg-background/85 text-text shadow-[0_8px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/70 to-transparent" />
            <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
                <Link to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-accent text-background shadow-[0_0_24px_rgba(212,162,76,0.2)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                        <span className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white/30 blur-md" />
                        <Sparkles size={19} strokeWidth={2.4} />
                    </span>
                    <span className="leading-none">
                        <span className="block text-[15px] font-semibold tracking-[0.18em] text-text">ROOM</span>
                        <span className="block pt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-accent">reader</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-1 rounded-full border border-border/80 bg-surface/70 p-1 md:flex">
                    {navigationItems.map((item) => (
                        <NavigationLink key={item.to} item={item} />
                    ))}
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    <NavLink
                        to="/login"
                        className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-text"
                    >
                        <UserRound size={16} strokeWidth={1.8} />
                        Log in
                    </NavLink>
                    <Link
                        to="/create"
                        className="flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-background shadow-[0_8px_20px_rgba(212,162,76,0.15)] transition-all hover:-translate-y-0.5 hover:bg-[#e2b45c] hover:shadow-[0_10px_24px_rgba(212,162,76,0.25)]"
                    >
                        <Plus size={16} strokeWidth={2.5} />
                        Create room
                    </Link>
                </div>

                <button
                    type="button"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent md:hidden"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {isOpen && (
                <div id="mobile-navigation" className="mobile-menu-enter border-t border-border/70 bg-surface/95 px-5 pb-5 pt-3 shadow-2xl backdrop-blur-xl md:hidden">
                        {navigationItems.map((item) => (
                            <NavigationLink key={item.to} item={item} onClick={() => setIsOpen(false)} mobile />
                        ))}
                        <div className="my-3 h-px bg-border" />
                        <NavigationLink item={{ label: "Log in", to: "/login", icon: UserRound }} onClick={() => setIsOpen(false)} mobile />
                        <Link
                            to="/create"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-background transition-colors hover:bg-[#e2b45c]"
                        >
                            <Plus size={17} strokeWidth={2.5} />
                            Create a room
                        </Link>
                </div>
            )}
        </nav>
    )
}
