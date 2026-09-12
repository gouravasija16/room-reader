import { useEffect, useState } from "react";
import formatTime from "../../utils/formatTime";

export default function useTimer(isRunning) {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (!isRunning) return;
        
        const timerStart = setInterval(() => setTimer(prev => prev + 1), 1000);
        return () => clearInterval(timerStart);
    }, [isRunning]);

    return { seconds: timer, formatted: formatTime(timer) };
}