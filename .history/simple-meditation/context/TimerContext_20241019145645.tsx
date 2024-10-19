import { Dispatch } from "react";

interface TimerContextType {
    duration: number;
    setDuration: Dispatch<Set>
}