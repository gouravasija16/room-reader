export default function Button({ children, variant, onClick }) {
    const baseStyles = "px-4 py-1 rounded-3xl font-medium transition";
    const variantStyles =
        variant === "primary"
            ? "bg-accent hover:opacity-90 text-background text-center border border-transparent rounded-2xl "
            : variant === "secondary"
                ? "bg-transparent text-text border border-border hover:bg-surface"
                : "bg-transparent text-accent hover:underline px-0 py-0";

    return (
        <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
            {children}
        </button>
    );
}