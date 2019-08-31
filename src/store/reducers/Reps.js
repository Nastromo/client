export const reps = (state = [], action) => {
    switch (action.type) {
        case `SET_REPS`:
            return action.list;

        default: return state;
    }
}

export const isCreate = (state = false, action) => {
    switch (action.type) {
        case `SET_CREATE_MODE_REPS`:
            return action.bool;

        default: return state;
    }
}