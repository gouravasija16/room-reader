import { useParams } from "react-router-dom"
import { useContext,useReducer } from "react"
import { RoomContext } from "../context/RoomContext"
import Button from "../shared/Button"
export default function PuzzleEditor(){
const {puzzleId}=useParams()
const {room}=useContext(RoomContext)
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
function SaveHandler(){
    
}
    return(
        <form onSubmit={SaveHandler}>
            <label >Question</label>
            <input value={state?.question} onChange={(e)=>dispatch({type:ACTIONS.SET_QUESTION,payload:e.target.value})}></input>
            <label>Answer</label>
            <input value={state?.answer}  onChange={(e)=>dispatch({type:ACTIONS.SET_ANSWER,payload:e.target.value})}></input>
            <label>Hint</label>
            <input value={state?.hint}  onChange={(e)=>dispatch({type:ACTIONS.SET_HINT,payload:e.target.value})} placeholder="Hint"></input>
            <Button variant="primary">Save</Button>
        </form>
    )
}