import { createContext, Dispatch, ReactNode, SetStateAction } from "react";

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