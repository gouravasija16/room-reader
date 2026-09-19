import { useParams,useNavigate } from "react-router-dom"
import { useContext,useEffect,useReducer } from "react"
import { RoomContext } from "../context/RoomContext"
import Button from "../shared/Button"
import useFetch from "../shared/useFetch"
export default function PuzzleEditor(){
    const {data,loading,error,fetchRiddle}=useFetch()
    const {puzzleId}=useParams()
    const {room,roomId,myRooms,setMyRooms}=useContext(RoomContext)
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
        dispatch({type:ACTIONS.SET_QUESTION,payload:data[0]?.question})
        dispatch({type:ACTIONS.SET_ANSWER,payload:data[0]?.answer})
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
    const puzzleObject={
        id:Date.now().toString(),
        question:state.question,
        answer:state.answer,
        hint:state.hint
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
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <form onSubmit={SaveHandler} className="flex flex-col gap-4">
            <label className="text-text  text-2xl">Question</label>
            <input value={state?.question} onChange={(e)=>dispatch({type:ACTIONS.SET_QUESTION,payload:e.target.value})} className="bg-surface border border-border rounded-2xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize" placeholder="The more of me you take, the more you leave behind. What am I?"></input>

            <label className="text-text text-2xl ">Answer</label>
            <input value={state?.answer}  onChange={(e)=>dispatch({type:ACTIONS.SET_ANSWER,payload:e.target.value})} className="bg-surface border border-border rounded-2xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your answer here"></input>

            <label className="text-text text-2xl ">Hint</label>
            <input value={state?.hint}  onChange={(e)=>dispatch({type:ACTIONS.SET_HINT,payload:e.target.value})} placeholder="Look down at your feet while walking" className="bg-surface border border-border rounded-2xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>

            <Button variant="primary">Save</Button>
        </form>
        </section>
    )
}