export const groups = (state = [], action) => {
    switch (action.type) {
        case `SET_GROUPS`:
            return action.list;

        default: return state;
    }
}

export const createGroup = (state = false, action) => {
    switch (action.type) {
        case `SET_CREATE_GROUP`:
            return action.bool;

        default: return state;
    }
}

export const group = (state = {}, action) => {
    let newState, list;
    switch (action.type) {
        case `SET_GROUP`:
            return action.obj;

        case `CHANGE_G_COMMENT`:
            newState = JSON.parse(JSON.stringify(state));
            newState.comment = action.text;
            return newState;

        case `CHANGE_G_NAME`:
            newState = JSON.parse(JSON.stringify(state));
            newState.groupName = action.text;
            return newState;

        case `ADD_REP`:
            newState = JSON.parse(JSON.stringify(state));
            list = JSON.parse(newState.reps ? newState.reps : "[]");
            list.push(action.text);
            newState.reps = JSON.stringify(list);
            return newState;

        case `DEL_REP`:
            newState = JSON.parse(JSON.stringify(state));
            list = JSON.parse(newState.reps ? newState.reps : "[]");
            list.splice(action.index, 1);
            newState.reps = JSON.stringify(list);
            return newState;

        default: return state;
    }
}