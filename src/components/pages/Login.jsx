import { Form, redirect, useActionData, useNavigation } from "react-router-dom"
import Button from "../shared/Button"
import { isAuthenticated, login } from "../../auth.jsx"

// The loader is intentionally exported alongside this route component for the router.
// eslint-disable-next-line react-refresh/only-export-components
export async function requireAuthLoader({ request }) {
    const pathname = new URL(request.url).pathname
    if (!isAuthenticated()) return redirect(`/login?redirectTo=${pathname}`)
    return null
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loginAction({ request }) {
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/myrooms"
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    if (!email || !password) {
        return {
            error: "Please enter email and password",
        }
    }

    login(email)
    return redirect(pathname)
}

export default function Login() {
    const data = useActionData()
    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting"

    return (
        <main className="flex min-h-[calc(100svh-13rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <section className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-2xl shadow-black/20 sm:p-8">
                <div className="mb-8 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted">Welcome back</p>
                    <h1 className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">Log in to Room Reader</h1>
                    <p className="mt-3 text-sm leading-6 text-muted">Continue creating and solving memorable rooms.</p>
                </div>
                <Form method="post" replace className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-text">Email address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                            className="w-full rounded-xl border border-border bg-elevated px-4 py-3 text-text outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium text-text">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            required
                            className="w-full rounded-xl border border-border bg-elevated px-4 py-3 text-text outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30"
                        />
                    </div>
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-1 w-full py-3"
                    >
                        {isSubmitting ? "Logging in..." : "Log in"}
                    </Button>
                </Form>
                {data?.error && (
                    <p role="alert" className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-center text-sm text-red-300">
                        {data.error}
                    </p>
                )}
            </section>
        </main>
    )
}
