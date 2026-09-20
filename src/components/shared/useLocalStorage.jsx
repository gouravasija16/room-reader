import { useEffect, useState } from "react"
export default function useLocalStorage(key,initialValue){
    function handleLocalStorage(){
        try{
            const item=localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch {
            return initialValue
        }
     }
    const [value,setValue]=useState(()=>handleLocalStorage())
     useEffect(()=>{
       localStorage.setItem(key,JSON.stringify((value)))
    },[value,key])
    
    return [value,setValue]
}