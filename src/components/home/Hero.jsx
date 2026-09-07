import Button from '../shared/Button.jsx'
export default function  Hero(){
    return (
           <section>
             <h1>Can you escape in time?</h1>
             <p>Play exciting escape rooms</p>
             <div className="action-Btns">
                <Button>Explore Rooms</Button>
                <Button>Create a Room</Button>
             </div>
           </section>
       
    )
}