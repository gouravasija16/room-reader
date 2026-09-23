import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";

export default function CreateCTA(){
    const navigate=useNavigate()
    return(
        <div className="bg-surface py-7 text-center max-w-7xl  px-7 border border-border rounded-2xl mb-8 mx-5 ">
           <h2 className="text-2xl font-bold mb-3">Have a Mystery of Your Own?</h2>
           <p className="text-muted text-medium font-medium mb-5">Create your own escape room,design challenging puzzles, and put players to the test</p>
           <Button variant="primary" onClick={()=>navigate(`/create`)}>Create Your Room →</Button>
        </div>  
    )
}