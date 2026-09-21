import {createBrowserRouter,createRoutesFromElements,redirect,Route} from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/pages/Login.jsx";
import Home from "./components/pages/Home.jsx";
import Rooms from "./components/pages/Rooms.jsx";
import MyRooms from "./components/pages/MyRooms.jsx";
import CreateRoom from "./components/pages/CreateRoom.jsx";
import RoomDetails from "./components/pages/RoomDetails.jsx";
import Gameplay from "./components/pages/Gameplay.jsx";
import Results from "./components/pages/Results.jsx";
import RoomEditor from "./components/pages/RoomEditor.jsx";
import RoomSettingsOverview from "./components/pages/RoomSettingsOverview.jsx";
import PuzzleEditor from "./components/pages/PuzzleEditor.jsx";
import Preview from "./components/pages/Preview.jsx";
import Settings from "./components/settings/Settings.jsx";
import History from "./components/history/History.jsx";
import {useAuth} from "./auth.jsx"
async function loginAction ({request}){
    const formData=await request.formData()
    const email =formData.get("email")
    const passsword=formData.get("password")
    if (email !=="test@gmail.com" || passsword !=="1234" )
        return {
           error: "Invalid email or password"
    }
    return redirect("/")
}
const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/myrooms" element={<MyRooms />} />
        <Route path="/create" element={<CreateRoom />} />
        <Route path="/rooms/:roomId" element={<RoomDetails />}/>
        <Route path="rooms/:roomId/play" element={<Gameplay />}/>
        <Route path="/rooms/:roomId/results" element={<Results />}/>
        <Route path="/rooms/:roomId/edit" element={<RoomEditor/>} >
        <Route index element={<RoomSettingsOverview />} />
        <Route path="puzzles/:puzzleId" element={<PuzzleEditor/>} />
        <Route path="preview" element={<Preview/>} />
        </Route>
        <Route path="/history" element={<History/>}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/login" element={<Login />} action={loginAction} />
        <Route path="*" element={<p>Page not found</p>} />
        </Route>
));

export default router;
    