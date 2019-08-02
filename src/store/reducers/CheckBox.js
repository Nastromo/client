export const checkbox = (state = {}, action) => {
    if (action.type === `CHECK_BOX`) {
        let newState;
        switch (action.obj.id) {
            case `orderSet`:
                newState = JSON.parse(JSON.stringify(state));
                newState.orderSet = action.obj.status;
                return newState;
            default: return state;
        }
    }
    return state;
}