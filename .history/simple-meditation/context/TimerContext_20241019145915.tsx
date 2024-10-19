import { Dispatch, SetStateAction } from "react";

interface TimerContextType {
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createC