
export const timelineReducer = ( state,  action ) => {

    switch (action.type) {
        case '[Timeline] - new Timeline':
            return  {
                ...state,
                timeline: [...state.timeline, action.payload]
            }

        default:
            return state;
    }
}

