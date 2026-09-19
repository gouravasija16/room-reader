import { Link } from "react-router-dom"
import { useState } from "react"
import {
    FaBars,
    FaTimes,
    FaHome,
    FaDoorOpen,
    FaUserShield,
    FaPlusCircle,
    FaHistory,
    FaCog
} from "react-icons/fa"
export default function Navbar(){
    const [isOpen,setIsOpen]=useState(false)   
    return(
        <nav className="flex justify-between gap-4 items-center px-8 py-4 bg-surface border-b border-border sticky top-0 text-text ">
            <div className="logo">Room Reader</div>
            <button
                type="button"
                className="md:hidden block text-xl"
                onClick={() => setIsOpen((open) => !open)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="hidden md:flex gap-4 justify-end">
              <Link to="/" className="hover:text-accent">Home</Link>
              <Link to="/rooms" className="hover:text-accent">Rooms</Link>
              <Link to="/myrooms" className="hover:text-accent">MyRooms</Link>
              <Link to="/create" className="hover:text-accent">CreateRoom</Link>
              <Link to="/history" className="hover:text-accent">History</Link>
              <Link to="/settings" className="hover:text-accent">Settings</Link>
            </div>
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-surface border-b border-border flex flex-col px-8 gap-4 md:hidden shadow-lg z-50">
                   <Link to="/" onClick={()=>setIsOpen(false)} className="hover:text-accent flex flex-row items-center justify-start gap-2 py-2 w-full text-left">
                       <FaHome  className="text-xl shrink-0"/> 
                       <span className="text-base font-medium">Home</span>
                    </Link>
                   <Link to="/rooms" onClick={()=>setIsOpen(false)} className="hover:text-accent flex flex-row items-center justify-start gap-2 py-2 w-full text-left">
                        <FaDoorOpen className="text-xl shrink-0" /> 
                        <span>Rooms</span>
                   </Link>
                   <Link to="/myrooms" onClick={()=>setIsOpen(false)} className="hover:text-accent flex flex-row items-center justify-start gap-2 py-2 w-full text-left">
                         <FaUserShield className="text-xl shrink-0" /> 
                         <span>MyRooms</span>
                   </Link>
                   <Link to="/create" onClick={()=>setIsOpen(false)} className="hover:text-accent flex flex-row items-center justify-start gap-2 py-2 w-full text-left">
                         <FaPlusCircle className="text-xl shrink-0" /> 
                         <span>CreateRoom</span>
                   </Link>
                   <Link to="/history" onClick={()=>setIsOpen(false)}  className="hover:text-accent flex flex-row items-center justify-start gap-2 py-2 w-full text-left">
                         <FaHistory className="text-xl shrink-0" /> 
                         <span>History</span>
                   </Link>
                   <Link to="/settings" onClick={()=>setIsOpen(false)} className="hover:text-accent flex flex-row items-center justify-start gap-2 py-2 w-full text-left">
                            <FaCog className="text-xl shrink-0" /> 
                            <span>Settings</span>
                   </Link>
                </div>
            )}
        </nav>
    )

}