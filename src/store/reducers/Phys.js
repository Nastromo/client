export const phys = (state = [], action) => {
    switch (action.type) {
        case `SET_PHYS`:
            return action.list;

        default: return state;
    }
}

export const phy = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SHOW_PHYS`:
            return action.obj;

        case `SET_CREDS_OPTION`:
            newState = JSON.parse(JSON.stringify(state));
            newState.creds = action.obj.option;
            return newState;

        case `SET_PECOS_OPTION`:
            newState = JSON.parse(JSON.stringify(state));
            newState.pecos = action.obj.option;
            return newState;



        default: return state;
    }
}