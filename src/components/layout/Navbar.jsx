import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <nav className="flex justify-between gap-4 items-center px-8 py-4 bg-surface border-b border-border sticky top-0 text-text ">
            <div className="logo">Room Reader</div>
            <div className="flex gap-4 justify-end">
              <Link to="/">Home</Link>
              <Link to="/rooms">Rooms</Link>
              <Link to="/myrooms">MyRooms</Link>
              <Link to="/create">CreateRoom</Link>
            </div>
        </nav>
    )

}