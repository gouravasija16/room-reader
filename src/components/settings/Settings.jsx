
import useLocalStorage from "../shared/useLocalStorage.jsx"
import Button from "../shared/Button.jsx"
export default function Settings({ isMuted, setIsMuted }){
    console.log(isMuted)
    const [reducedMotion,setReducedMotion]=useLocalStorage('reduced-motion',false)
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
                    {isMuted ? "Unmute Music" : "Mute Music"}
                </Button>
                </div>
               
             </div>
             <div>
            <Button variant="secondary" onClick={handleClearData}>Clear All local Data</Button>
            </div>
            <div>
                <Button variant="secondary" onClick={()=>setReducedMotion(!reducedMotion)} >{reducedMotion ? 'Enable Animations' : 'Reduce Motion'}</Button>
            </div>
            <p className="text-lg text-muted tracking-wide">More settings coming soon.</p>
        </div>
       
    )
}