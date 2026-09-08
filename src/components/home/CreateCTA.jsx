import Button from "../shared/Button";

export default function CreateCTA(){
    return(
        <div className="bg-surface py-6 text-center m-5 border border-border rounded-2xl">
           <h2 className="text-2xl font-bold mb-3">Have a Mystery of Your Own?</h2>
           <p className="text-muted text-medium font-medium mb-5">Create your own escape room,design challenging puzzles, and put players to the test</p>
           <Button variant="primary">Create Your Room →</Button>
        </div>
        
    )
}