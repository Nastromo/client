export const searchQuery = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SET_QUERY`:
            newState = JSON.parse(JSON.stringify(state));
            newState[action.obj.id] = action.obj.text;
            return newState;

        default: return state;
    }
}

export const searchLoading = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SET_LOAD_STATUS`:
            newState = JSON.parse(JSON.stringify(state));
            newState[action.obj.id] = action.obj.bool;
            return newState;

        default: return state;
    }
}

export const activeRow = (state = 0, action) => {
    switch (action.type) {
        case `SET_ACTIVE_ROW`:
            return action.index;

        default: return state;
    }
}

export const searchResults = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SET_RESULTS_LIST`:
            newState = JSON.parse(JSON.stringify(state));
            newState[action.obj.id] = action.obj.list;
            return newState;

        default: return state;
    }
}