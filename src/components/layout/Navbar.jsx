import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <nav className="flex justify-between gap-4 items-center px-8 py-4 bg-surface border-b border-border sticky top-0 text-text ">
            <div className="logo">Room Reader</div>
            <div className="flex gap-4 justify-end">
              <Link to="/" className="hover:text-accent">Home</Link>
              <Link to="/rooms" className="hover:text-accent">Rooms</Link>
              <Link to="/myrooms" className="hover:text-accent">MyRooms</Link>
              <Link to="/create" className="hover:text-accent">CreateRoom</Link>
            </div>
        </nav>
    )

}