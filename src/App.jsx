import Navbar from "./components/layout/Navbar.jsx"
import Home from "./components/pages/Home.jsx"
import {Routes,Route } from "react-router-dom"
import Rooms from "./components/pages/Rooms.jsx"
import Footer from "./components/layout/Footer.jsx"
import MyRooms from "./components/pages/MyRooms.jsx"
import CreateRoom from "./components/pages/CreateRoom.jsx"
import RoomDetails from "./components/pages/RoomDetails.jsx"
import Gameplay from "./components/pages/Gameplay.jsx"
import Results from "./components/pages/Results.jsx"
function App() {
  return (
    <div className="bg-background text-text">
      <Navbar />
       <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/myrooms" element={<MyRooms />} />
        <Route path="/create" element={<CreateRoom />} />
        <Route path="/rooms/:roomId" element={<RoomDetails />}/>
        <Route path="rooms/:roomId/play" element={<Gameplay />}/>
        <Route path="/rooms/:roomId/results" element={<Results />}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}
export default App
