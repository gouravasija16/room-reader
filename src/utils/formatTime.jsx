export default function formatTime(timer){
    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
   return `${formattedMinutes}:${formattedSeconds}`
    
}