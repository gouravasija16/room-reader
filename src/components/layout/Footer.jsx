import { Link } from "react-router-dom";

export default function Footer(){
    return(
          <footer className="border-t border-border px-4 py-8 text-sm text-muted">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link to="/">Home</Link>
              <Link to="/rooms">Rooms</Link>
              <Link to="/myrooms">MyRooms</Link>
              <Link to="/create">CreateRoom</Link>
            </div>
              <p className="mt-5 text-center font-normal">© 2026 Room Reader. All rights reserved</p>
        </footer>
    )
}