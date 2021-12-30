import { useEffect, useState } from "react"

export const Timer = ({ initialTime, finalTime }) => {

    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTime((prev) => {
                if (prev >= finalTime) {
                    clearInterval(timerInterval);
                    return "Times Up!"
                }
                return prev + 1;
            });
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        }
    }, [])

    return <div>
        <h3>Time Elapsed: {time}</h3>
    </div>
}