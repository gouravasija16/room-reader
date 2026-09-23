import {Form} from 'react-router-dom'
import Button from '../shared/Button'
import { useActionData } from 'react-router-dom'
import {isAuthenticated,login} from "../../auth.jsx"
import { redirect } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';

// The loader is intentionally exported alongside this route component for the router.
// eslint-disable-next-line react-refresh/only-export-components
export async function requireAuthLoader({request}){
    const pathname=new URL(request.url).pathname
    if (!isAuthenticated()) return redirect(`/login?redirectTo=${pathname}`)
        return null
}
// eslint-disable-next-line react-refresh/only-export-components
export async function loginAction({ request }) {
    const pathname=new URL(request.url).searchParams.get('redirectTo') || '/myrooms'
    const formData=await request.formData()
    const email =formData.get("email")
    const password=formData.get("password")
    if (!email  || !password )
        return {
           error: "Please enter email and password"
    }
    login(email)
    return redirect(pathname)
}
export  default function  Login() {
    const data=useActionData()
    const navigation=useNavigation()
    return(
        <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h2  className="text-center text-3xl text-accent text-bold mb-5">Login</h2>
        <Form method="post" replace className="flex flex-col gap-3 text-center">
           <input type="email" name="email" placeholder="email" className="bg-surface border border-border  px-4 py-2 rounded-xl text-text  mx-auto text-center focus:border-accent mb-3 "></input>

           <input name="password" type="password" placeholder="Password" className="bg-surface border border-border  px-4 py-2 rounded-xl text-text mx-auto  text-center focus:border-accent mb-3 w-auto "></input>
                     <Button variant="primary" type="submit" disabled={navigation.state === "submitting"}>
                         {navigation.state === "submitting" ? "Logging in" : "Login"}
                     </Button>
        </Form>
        {data?.error && <p className="text-red-500">{data?.error}</p>}
        </div>
    )
}