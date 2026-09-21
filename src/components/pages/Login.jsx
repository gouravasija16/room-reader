import {Form} from 'react-router-dom'
import Button from '../shared/Button'
import { useActionData } from 'react-router-dom'
export  default function  Login() {
    const data=useActionData()
    return(
        <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h2  className="text-center text-3xl text-accent text-bold mb-5">Login</h2>
        <Form method="post" replace className="flex flex-col gap-3 text-center">
           <input type="email" name="email" placeholder="email" className="bg-surface border border-border  px-4 py-2 rounded-xl text-text  mx-auto text-center focus:border-accent mb-3 "></input>

           <input name="password" type="password" placeholder="Password" className="bg-surface border border-border  px-4 py-2 rounded-xl text-text mx-auto  text-center focus:border-accent mb-3 "></input>
           <Button variant="primary" type="submit">Login</Button>
        </Form>
        {data?.error && <p className="text-red-500">{data?.error}</p>}
        </div>
    )
}