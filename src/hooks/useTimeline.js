import { useContext } from "react"
import { TimelineContext } from "../context"

export const useTimeline = () => {
    return useContext( TimelineContext );
}