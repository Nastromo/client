export const clients = (state = [], action) => {
    switch (action.type) {
        case `SET_CLIETNS`:
            return action.list;

        default: return state;
    }
}

export const client = (state = {}, action) => {
    switch (action.type) {
        case `SET_CLIENT`:
            return action.obj;

        default: return state;
    }
}