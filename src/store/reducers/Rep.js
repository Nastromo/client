export const rep = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SET_REP`:
            return action.obj;

        case `SET_TIME_DROP_OPTION`:
            newState = JSON.parse(JSON.stringify(state));
            newState.reportTime = action.obj.option;
            return newState;

        case `CHECK_BOX_SET`:
            switch (action.obj.id) {
                case `tnp`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.tnpReport = action.obj.status;
                    return newState;
                case `supply`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.supplyOrders = action.obj.status;
                    return newState;
                case `igs`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.igsReports = action.obj.status;
                    return newState;
                default: return state;
            }

        case `SET_FIRST_NAME`:
            newState = JSON.parse(JSON.stringify(state));
            newState.firstName = action.text;
            return newState;

        case `SET_LAST_NAME`:
            newState = JSON.parse(JSON.stringify(state));
            newState.lastName = action.text;
            return newState;

        case `SET_PHONE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.phone = action.text;
            return newState;

        case `SET_EMAIL`:
            newState = JSON.parse(JSON.stringify(state));
            newState.email = action.text;
            return newState;

        case `SET_DATE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.startDate = action.text;
            return newState;

        case `SET_COMMENT`:
            newState = JSON.parse(JSON.stringify(state));
            newState.comment = action.text;
            return newState;

        default: return state;
    }
}