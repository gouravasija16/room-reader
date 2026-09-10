import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="m-auto">
            <div className="flex gap-6 justify-center m-3 ">
            <Link to="/">Home</Link>
              <Link to="/rooms">Rooms</Link>
              <Link to="/myrooms">MyRooms</Link>
              <Link to="/create">CreateRoom</Link>
            </div>
            <p className="text-center text-medium font-normal">© 2026 Room Reader. All rights reserved</p>
        </footer>
    )
}