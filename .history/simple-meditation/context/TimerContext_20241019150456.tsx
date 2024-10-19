import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface TimerContextType {
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextType>({
    duration:10,
    setDuration: () => {},
});

interface TimerProviderProps {
    children: ReactNode;
}

const TimeProvider = ({children}: TimerProviderProps) => {
    const [duration, setDuration] = useState(10);

    return (
        <TimerContext.Provider value={{duration, setDuration}}>

        </TimerContext.Provider>
    )
}