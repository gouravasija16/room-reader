import { useParams } from "react-router-dom"
import { useContext, useState } from "react"
import { RoomContext } from "../context/RoomContext"
import Button from "../shared/Button"
export default function PuzzleEditor(){
const {puzzleId}=useParams()
const {room,roomId,myRooms,setMyRooms}=useContext(RoomContext)
const isNew=puzzleId==='new'
const existingPuzzle=isNew ? null :room.puzzles.find(p=>p.id===puzzleId)
const [question,setQuestion]=useState(existingPuzzles?.question || '')
const [answer,setAnswer]=useState(existingPuzzles?.answer || '')
const [hint,setHint]=useState(existingPuzzles?.hint || '')
function SaveHandler(){
}
    return(
        <form onSubmit={SaveHandler}>
            <label >Question</label>
            <input value={question} onChange={(e)=>setQuestion(e.currentTarget.value)}></input>
            <label>Answer</label>
            <input value={answer}  onChange={(e)=>setAnswer(e.currentTarget.value)}></input>
            <label>hint</label>
            <input value={hint}  onChange={(e)=>setHint(e.currentTarget.value)}>hint</input>
            <Button variant="primary">Save</Button>
        </form>
    )
}