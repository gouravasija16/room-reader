import Navbar from "./components/layout/Navbar.jsx"
import Footer from "./components/layout/Footer.jsx"
import ambientMusic from "./assets/ambient-music.mp3"
import useLocalStorage from "./components/shared/useLocalStorage.jsx"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useRef } from "react"
function App() {
  const audioRef=useRef(null)
  const [isMuted,setIsMuted] = useLocalStorage('music-muted', true)
  const [reducedMotion]=useLocalStorage('reduced-motion',false)
  useEffect(()=>{
    if(reducedMotion){
      document.documentElement.classList.add('reduce-motion')
    }else{
       document.documentElement.classList.remove('reduce-motion')
    }
  },[reducedMotion])
  useEffect(()=>{
    if(!isMuted){
      audioRef.current?.play()
    }else{
      audioRef.current?.pause()
    }
  })
  const outletContext = { isMuted, setIsMuted }
  return (
    <div className="bg-background text-text">
    <audio  ref={audioRef} src={ambientMusic}  loop muted={isMuted}  autoPlay/>
      <Navbar />
       <div >
      <Outlet context={outletContext} />
       </div>
      <Footer/>
    </div>
  )
}
export default App
