export default function Button({ children, variant, onClick }) {
    const baseStyles = "px-6 py-3 rounded-lg font-medium transition";
    const variantStyles =
        variant === "primary"
            ? "bg-accent text-background hover:opacity-90"
            : variant === "secondary"
                ? "bg-transparent text-text border border-border hover:bg-surface"
                : "bg-transparent text-accent hover:underline px-0 py-0";

    return (
        <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
            {children}
        </button>
    );
}