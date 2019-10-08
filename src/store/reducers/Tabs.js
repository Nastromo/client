export const tabact = (state = true, action) => {
    switch (action.type) {
        case `SET_ACTIVE`:
            return action.bool;

        default: return state;
    }
}