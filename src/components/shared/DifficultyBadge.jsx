export default function DifficultyBadge({difficulty}){
return(
    <span className="border rounded-full px-2 py-1 text-xs  text-accent self-start font-bold bg-background">
        {difficulty}
    </span>
)
}