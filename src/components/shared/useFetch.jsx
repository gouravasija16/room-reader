import { useState } from "react";
export default function useFetch() {
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")
   const [data,setData]=useState(null)
    async function fetchRiddle() {
       setError("")
       setData(null)
     try{
        setLoading(true)
        const apiKey = import.meta.env.VITE_RIDDLE_API_KEY
        if (!apiKey) {
          throw new Error("Riddle suggestions are not configured. Add VITE_RIDDLE_API_KEY to your environment.")
        }
        const response = await fetch('https://api.api-ninjas.com/v1/riddles', {
      headers: {
        'X-Api-Key': apiKey,
       },
     });
        if (!response.ok) {
          throw new Error(`Could not fetch a riddle (${response.status}). Please try again.`)
        }
        const result = await response.json();
        setData(result)
     } catch (error) {
      setError(error instanceof Error ? error.message : "Could not fetch a riddle. Please try again.")
     }finally{
        setLoading(false)
     }
    }

    return { loading, error, data, fetchRiddle }
  }