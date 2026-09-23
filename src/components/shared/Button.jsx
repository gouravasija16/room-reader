export default function Button({ children, variant, className = "", ...props }) {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-3xl font-medium transition w-full sm:w-auto";
    const variantStyles =
        variant === "primary"
            ? "bg-accent hover:opacity-90 text-background text-center border border-transparent rounded-2xl text-sm md:text-base disabled:cursor-not-allowed disabled:opacity-60"
            : variant === "secondary"
                ? "bg-transparent text-text border border-border hover:bg-surface"
                : "bg-transparent text-accent hover:underline px-0 py-0 w-auto"

    return (
        <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
            {children}
        </button>
    )
}
