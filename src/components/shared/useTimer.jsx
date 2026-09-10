import { useEffect, useState } from "react";

export default function useTimer(){
    const [timer,setTimer]=useState(0)

    useEffect(()=>{
        const timerStart=setInterval(()=>setTimer(prev=>prev+1),1000)
        return ()=>clearInterval(timerStart)
    },[])

    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

    return `${formattedMinutes}:${formattedSeconds}`
}