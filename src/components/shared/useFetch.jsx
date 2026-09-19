import { useState } from "react";

export default function useFetch() {
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")
   const [data,setData]=useState(null)
    async function fetchRiddle() {
     try{
        setLoading(true)
     const response = await fetch('https://api.api-ninjas.com/v1/riddles', {
      headers: {
        'X-Api-Key': import.meta.env.VITE_RIDDLE_API_KEY,
       },
     });
    const result = await response.json();
    setData(result)
    console.log(data)
     } catch (error) {
      setError(error)
     }finally{
        setLoading(false)
     }
   }
   return { data,fetchRiddle,loading,error };
}
