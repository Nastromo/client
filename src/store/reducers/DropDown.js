import moment from 'moment';


export const dropdownStatus = (state = {}, action) => {
    let newState;
    if (action.type === `SHOW_DROP_DOWN`) {
        switch (action.obj.id) {
            case `date`:
                newState = JSON.parse(JSON.stringify(state));
                newState.date = action.obj.status;
                return newState;
            case `fasting`:
                newState = JSON.parse(JSON.stringify(state));
                newState.fasting = action.obj.status;
                return newState;
            case `stat`:
                newState = JSON.parse(JSON.stringify(state));
                newState.stat = action.obj.status;
                return newState;
            case `orderType`:
                newState = JSON.parse(JSON.stringify(state));
                newState.orderType = action.obj.status;
                return newState;
            case `state`:
                newState = JSON.parse(JSON.stringify(state));
                newState.state = action.obj.status;
                return newState;
            case `bills`:
                newState = JSON.parse(JSON.stringify(state));
                newState.bills = action.obj.status;
                return newState;
            case `sex`:
                newState = JSON.parse(JSON.stringify(state));
                newState.sex = action.obj.status;
                return newState;
            case `numbers`:
                newState = JSON.parse(JSON.stringify(state));
                newState.numbers = action.obj.status;
                return newState;
            case `billStates`:
                newState = JSON.parse(JSON.stringify(state));
                newState.billStates = action.obj.status;
                return newState;


            default: return state;
        }
    } else {
        return state;
    }
}

export const dropdownOption = (state = {}, action) => {
    let newState;
    if (action.type === `SET_DROP_DOWN_OPTION`) {
        switch (action.obj.id) {
            case `date`:
                newState = JSON.parse(JSON.stringify(state));
                switch (action.obj.option) {
                    case `Today`:
                        newState.date = moment().format('MM/DD/YYYY');
                        return newState;
                    case `Yesterday`:
                        newState.date = moment().subtract(1, "days").format('MM/DD/YYYY');
                        return newState;
                    case `2 Days Ago`:
                        newState.date = moment().subtract(2, "days").format('MM/DD/YYYY');
                        return newState;
                    default: return newState;
                }
            case `fasting`:
                newState = JSON.parse(JSON.stringify(state));
                newState.fasting = action.obj.option;
                return newState;
            case `stat`:
                newState = JSON.parse(JSON.stringify(state));
                newState.stat = action.obj.option;
                return newState;
            case `orderType`:
                newState = JSON.parse(JSON.stringify(state));
                newState.orderType = action.obj.option;
                return newState;
            case `state`:
                newState = JSON.parse(JSON.stringify(state));
                newState.state = action.obj.option;
                return newState;
            case `bills`:
                newState = JSON.parse(JSON.stringify(state));
                newState.bills = action.obj.option;
                return newState;
            case `sex`:
                newState = JSON.parse(JSON.stringify(state));
                newState.sex = action.obj.option;
                return newState;
            case `numbers`:
                newState = JSON.parse(JSON.stringify(state));
                newState.numbers = action.obj.option;
                return newState;
            case `billStates`:
                newState = JSON.parse(JSON.stringify(state));
                newState.billStates = action.obj.option;
                return newState;

            default: return newState;
        }
    } else {
        return state;
    }
}