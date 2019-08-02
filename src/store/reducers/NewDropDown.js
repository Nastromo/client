export const newDDStatus = (state = {}, action) => {
    if (action.type === `SHOW_NEW_DROP_DOWN`) {
        let newState = JSON.parse(JSON.stringify(state));
        newState[action.obj.id] = action.obj.status;
        return newState;
    } else {
        return state;
    }
}

export const newDDOption = (state = {}, action) => {
    if (action.type === `SET_NEW_DROP_DOWN_OPTION`) {
        let newState = JSON.parse(JSON.stringify(state));
        newState[action.obj.id] = action.obj.option;
        return newState;
    } else {
        return state;
    }
}