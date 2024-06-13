import { useReducer } from "react";
import { TimelineContext, timelineReducer } from ".";

const TIMELINE_INITIAL_STATE = {
  timeline: [
    {
      title: "Study",
      text: "Review the notes from the latest lecture",
      color: "#12a732",
    },
    {
      title: "Cook",
      text: "Prepare a new recipe for dinner",
      color: "#ff3075",
    },
    {
      title: "Clean",
      text: "Tidy up the living room and kitchen",
      color: "#0d96d6",
    },
  ],
};

const TimelineProvider = ({ children }) => {
  const [state, dispatch] = useReducer(timelineReducer, TIMELINE_INITIAL_STATE);

  const addTimelineItem = (newTimeline) => {
    dispatch({ type: "[Timeline] - new Timeline", payload: newTimeline });
  };

  return (
    <TimelineContext.Provider
      value={{
        ...state,

        //Methods
        addTimelineItem,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};

export { TimelineProvider };
