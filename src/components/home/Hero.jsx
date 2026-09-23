import Button from '../shared/Button.jsx'
import { useNavigate } from 'react-router-dom'
export default function  Hero(){
  const navigate=useNavigate()
    return (
           <section className='text-center max-w-7xl py-8 px-6 mx-auto bg-background'>
             <h1 className='text-4xl font-bold text-text mb-3'>Can you escape in time?</h1>
             <p className=' text-base mb-5 text-muted font-normal'>Play exciting escape rooms</p>
             <div className="flex gap-5 justify-center px-4">
                <Button variant="primary" onClick={()=>navigate(`/rooms`)}>Explore Rooms</Button>
                <Button variant="secondary" onClick={()=>navigate(`/create`)}>Create a Room</Button>
             </div>
           </section>
       
    )
}