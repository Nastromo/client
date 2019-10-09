export const phys = (state = [], action) => {
    switch (action.type) {
        case `SET_PHYS`:
            return action.list;

        default: return state;
    }
}

export const phy = (state = {}, action) => {
    let newState, list;
    switch (action.type) {
        case `SHOW_PHYS`:
            return action.obj;

        case `SET_CREDS_OPTION`:
            newState = JSON.parse(JSON.stringify(state));
            list = JSON.parse(newState.creds ? newState.creds : "[]");
            list.push(action.obj.option);
            newState.creds = JSON.stringify(list);
            return newState;

        case `DEL_CRED`:
            newState = JSON.parse(JSON.stringify(state));
            list = JSON.parse(newState.creds);
            list.splice(action.index, 1);
            newState.creds = JSON.stringify(list);
            return newState;

        case `SET_PECOS_OPTION`:
            newState = JSON.parse(JSON.stringify(state));
            newState.pecos = action.obj.option;
            return newState;

        case `ADD_ORDER`:
            newState = JSON.parse(JSON.stringify(state));
            list = JSON.parse(newState.ordersList ? newState.ordersList : "[]");
            list.push(action.text)
            newState.ordersList = JSON.stringify(list);
            return newState;

        case `DEL_ORDER`:
            newState = JSON.parse(JSON.stringify(state));
            list = JSON.parse(newState.ordersList);
            list.splice(action.index, 1);
            newState.ordersList = JSON.stringify(list);
            return newState;

        case `ADD_DIAG`:
            newState = JSON.parse(JSON.stringify(state));
            list = JSON.parse(newState.diagList ? newState.diagList : "[]");
            list.push(action.text)
            newState.diagList = JSON.stringify(list);
            return newState;

        case `DEL_DIAG`:
            newState = JSON.parse(JSON.stringify(state));
            list = JSON.parse(newState.diagList);
            list.splice(action.index, 1);
            newState.diagList = JSON.stringify(list);
            return newState;


        default: return state;
    }
}