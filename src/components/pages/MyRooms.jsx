import useLocalStorage from "../shared/useLocalStorage"
import { Link } from "react-router-dom"

export default function MyRooms(){
    const [myRooms,setMyRooms]=useLocalStorage("my-rooms",[])
    return(
        <>
            {myRooms.length === 0 &&
                <div className="flex flex-col gap-3 justify-center items-center my-auto py-3 ">
                    <p className="text-2xl text-text font-bold">No rooms yet-Create your first rooms</p>
                    <Link to="/create" className="text-lg border border-border rounded-2xl  text-accent inline-block w-48 mx-auto text-center ">Create your Room</Link>
                </div>
            }
        </>
    )
}