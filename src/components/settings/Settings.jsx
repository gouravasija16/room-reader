import {Volume2,VolumeX,Zap,Trash2} from "lucide-react"
import useLocalStorage from "../shared/useLocalStorage.jsx"
import Button from "../shared/Button.jsx"
import {logout} from  "../../auth.jsx"
import { useNavigate } from "react-router-dom"
import { useOutletContext } from "react-router-dom"
export default function Settings(){
    const {isMuted,setIsMuted}=useOutletContext()
    console.log(isMuted)
    const [reducedMotion,setReducedMotion]=useLocalStorage('reduced-motion',false)
    const navigate=useNavigate()
    function handleLogout(){
        logout()
        navigate('/login')
    }
    function handleClearData(){
        if(!window.confirm("This will delete all your created rooms,best times, and history. This cannot be undone. Continue?")) return
            localStorage.clear()
            window.location.reload()
    }
    return(
        <div className="flex flex-col gap-4 p-6">
             <h2 className="text-2xl text-text font-bold">Settings</h2>
             <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold">Background Music</h3>
                <div>
                     <Button variant="primary" onClick={()=>setIsMuted(!isMuted)}>
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    {isMuted ? "Unmute Music" : "Mute Music"}
                </Button>
                </div> 
             </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold">Motion</h3>
            <div>
                <Button variant="secondary" onClick={()=>setReducedMotion(!reducedMotion)} >
                <Zap size={20} />
                {reducedMotion ? 'Enable Animations' : 'Reduce Motion'}</Button>
            </div>
            </div>
             <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold">Clear Data</h3>
             <div>
            <Button variant="secondary" onClick={handleClearData}>
            <Trash2 size={20} />
            Clear All local Data</Button>
            </div>
            </div>
            <div className="m-4">
                <Button onClick={handleLogout} variant="primary">Logout</Button>
            </div>
            <p className="text-sm text-muted">Note: This will reduce or disable animations in the app, including confetti and other visual effects.</p>
            <p className="text-sm text-muted">This setting is also saved in local storage, so it will persist across sessions.</p>
            <p className="text-lg text-muted tracking-wide">More settings coming soon.</p>
        </div>
       
    )
}