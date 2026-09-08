export default function Navbar(){
    return(
        <nav className="flex justify-between gap-4 items-center px-8 py-4 bg-surface border-b border-border sticky top-0 ">
            <div className="logo">Room Reader</div>
            <div className="flex gap-4 justify-end">
              <a href="#" >Home</a>
              <a href="#">Rooms</a>
              <a href="#">MyRooms</a>
              <a href="#">CreateRoom</a>

            </div>
        </nav>
    )

}