export const actRow = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SET_ACTIVE_REP_ROW`:
            newState = JSON.parse(JSON.stringify(state));
            newState.rep = action.index;
            return newState;

        default: return state;
    }
}


export const activePhyRaw = (state = null, action) => {
    switch (action.type) {
        case `SET_PHY_ROW`:
            return action.index;

        default: return state;
    }
}

