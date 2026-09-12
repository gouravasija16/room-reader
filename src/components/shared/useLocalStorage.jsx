import { useEffect, useState } from "react"
export default function useLocalStorage(key,initialValue){
    function handleLocalStorage(){
          return localStorage.getItem(key)
         ? JSON.parse(localStorage.getItem(key))
         : initialValue
     }
    const [value,setValue]=useState(()=>handleLocalStorage())
     useEffect(()=>{
       localStorage.setItem(key,JSON.stringify((value)))
    },[value,key])
    
    return [value,setValue]
}