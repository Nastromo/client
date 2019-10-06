export const locs = (state = [], action) => {
    switch (action.type) {
        case `SET_LOCS`:
            return action.list;

        default: return state;
    }
}