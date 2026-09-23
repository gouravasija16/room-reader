import { useParams,useNavigate } from "react-router-dom"
import { useContext,useEffect,useReducer,useState } from "react"
import { RoomContext } from "../context/RoomContext"
import Button from "../shared/Button"
import useFetch from "../shared/useFetch"
export default function PuzzleEditor(){
    const {data,loading,error,fetchRiddle}=useFetch()
    const {puzzleId}=useParams()
    const {room,roomId,myRooms,setMyRooms}=useContext(RoomContext)
    const [formError,setFormError]=useState("")
    const navigate=useNavigate()
    const isNew=puzzleId==='new'
    const existingPuzzle=isNew ? null :room.puzzles.find(p=>p.id===puzzleId)
    const initialState={
    question:existingPuzzle?.question || '',
    answer:existingPuzzle?.answer || '',
    hint:existingPuzzle?.hint || ''
}
const [state,dispatch]=useReducer(reducer,initialState)
const ACTIONS={
    SET_QUESTION:'setQuestion',
    SET_ANSWER:'setAnswer',
    SET_HINT:'setHint'
}
useEffect(()=>{
    console.log("data received:",data)
    if(data){
        console.log(data[0]?.question)
        console.log(data[0]?.answer)
        dispatch({type:'setQuestion',payload:data[0]?.question})
        dispatch({type:'setAnswer',payload:data[0]?.answer})
    }
},[data])
function reducer (state,action){
     switch (action.type){
        case 'setQuestion':
            return {...state,question:action.payload}
        case 'setAnswer':
            return {...state,answer:action.payload}
        case 'setHint':
            return {...state,hint:action.payload}
        default:
            return state
     }
}
function SaveHandler(e){
    console.log("puzzled:",puzzleId,"isNew:",isNew)
    console.log("room:",room)
    e.preventDefault()

    const question=state.question.trim()
    const answer=state.answer.trim()
    const hint=state.hint.trim()
    if(!question || !answer || !hint){
        setFormError("Enter a question, answer, and hint before saving.")
        return
    }
    setFormError("")
    const puzzleObject={
        id:Date.now().toString(),
        question,
        answer,
        hint
    }
     const updatedRoom= isNew 
     ? {...room,puzzles:[...room.puzzles,puzzleObject]}
     : {...room,puzzles:room.puzzles.map(p=>p.id===puzzleId ? puzzleObject : p)}

    const updatedRooms=myRooms.map(r=>r.id===roomId ? updatedRoom : r)
    setMyRooms( updatedRooms)
    navigate(`/rooms/${roomId}/edit`)
}
    return(
        <section className="bg-elevated px-6 py-4 border border-border rounded-lg">
        <h2 className="text-2xl font-bold text-text mb-4">{isNew ? 'Add New Puzzle' : 'Edit Puzzle'}</h2>
        <div className="m-4">
            <Button variant="secondary" onClick={fetchRiddle} disabled={loading}>{loading ? 'fetching':'Suggest a Puzzle'}</Button>
        </div>
        {error && <p role="alert" className="text-red-400 text-sm">{error}</p>}
        {formError && <p role="alert" className="text-red-400 text-sm">{formError}</p>}
        <form onSubmit={SaveHandler} className="flex flex-col gap-3">
            <label htmlFor="puzzle-question" className="text-lg font-medium text-text">Question</label>
            <input id="puzzle-question" value={state?.question} onChange={(e)=>dispatch({type:ACTIONS.SET_QUESTION,payload:e.target.value})} className="w-full rounded-xl border border-border bg-surface px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="The more of me you take, the more you leave behind. What am I?" />

            <label htmlFor="puzzle-answer" className="text-lg font-medium text-text">Answer</label>
            <input id="puzzle-answer" value={state?.answer}  onChange={(e)=>dispatch({type:ACTIONS.SET_ANSWER,payload:e.target.value})} className="w-full rounded-xl border border-border bg-surface px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your answer here" />

            <label htmlFor="puzzle-hint" className="text-lg font-medium text-text">Hint</label>
            <input id="puzzle-hint" value={state?.hint}  onChange={(e)=>dispatch({type:ACTIONS.SET_HINT,payload:e.target.value})} placeholder="Look down at your feet while walking" className="w-full rounded-xl border border-border bg-surface px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />

            <Button variant="primary">Save</Button>
        </form>
        </section>
    )
}