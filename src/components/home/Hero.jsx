import Button from '../shared/Button.jsx'
export default function  Hero(){
    return (
           <section className='text-center px-8 py-5 bg-background'>
             <h1 className='text-4xl font-bold text-text mb-3'>Can you escape in time?</h1>
             <p className=' text-base mb-5 text-muted font-normal'>Play exciting escape rooms</p>
             <div className="flex gap-5 justify-center">
                <Button variant="primary">Explore Rooms</Button>
                <Button variant="secondary">Create a Room</Button>
             </div>
           </section>
       
    )
}