export const eclients = (state = [], action) => {
    switch (action.type) {
        case `SET_E_CLIENTS`:
            return action.list;

        default: return state;
    }
}

export const epayments = (state = [], action) => {
    switch (action.type) {
        case `SET_E_PAYMENTS`:
            return action.list;

        default: return state;
    }
}

export const createEClientMode = (state = false, action) => {
    switch (action.type) {
        case `SET_E_C_MODE`:
            return action.bool;

        default: return state;
    }
}

export const activeERow = (state = 0, action) => {
    switch (action.type) {
        case `SET_ACTIVE_RAW_E_C`:
            return action.i;

        default: return state;
    }
}

export const price = (state = '295', action) => {
    switch (action.type) {
        case `CHANGE_PRICE`:
            return action.text;

        default: return state;
    }
}

export const disc = (state = false, action) => {
    switch (action.type) {
        case `CHANGE_DISCOUNT`:
            return action.bool;

        default: return state;
    }
}

export const qty = (state = 0, action) => {
    switch (action.type) {
        case `CHANGE_QTY`:
            return action.text;

        default: return state;
    }
}

export const etest = (state = ``, action) => {
    switch (action.type) {
        case `SET_TEST_E_OPTION`:
            switch (action.obj.id) {
                case `tests_e`:
                    return action.obj.option;

                default: return state;
            }

        default: return state;
    }
}

export const eclient = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SET_E_CLIENT`:
            return action.obj;

        case `SET_E_EMAIL`:
            newState = JSON.parse(JSON.stringify(state));
            newState.email = action.text;
            return newState;

        case `SET_E_PASS`:
            newState = JSON.parse(JSON.stringify(state));
            newState.pass = action.text;
            return newState;

        case `SET_GROUP_E_OPTION`:
            newState = JSON.parse(JSON.stringify(state));
            newState.group = action.obj.option;
            return newState;

        case `SET_E_PHONE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.phone = action.text;
            return newState;

        case `SET_E_STREET`:
            newState = JSON.parse(JSON.stringify(state));
            newState.street = action.text;
            return newState;

        case `SET_E_NAME`:
            newState = JSON.parse(JSON.stringify(state));
            newState.name = action.text;
            return newState;

        case `SET_E_STATE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.state = action.text;
            return newState;

        case `SET_E_ZIP`:
            newState = JSON.parse(JSON.stringify(state));
            newState.zip = action.text;
            return newState;

        default: return state;
    }
}