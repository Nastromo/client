export const clients = (state = [], action) => {
    switch (action.type) {
        case `SET_CLIETNS`:
            return action.list;

        default: return state;
    }
}

export const client = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SET_CLIENT`:
            return action.obj;

        case `SET_STAT_OPTION`:
            newState = JSON.parse(JSON.stringify(state));
            newState.repOpt = action.obj.option;
            return newState;

        case `CHECK_BOX_SET`:
            switch (action.obj.id) {
                case `inhouse`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.inPrint = action.obj.status;
                    return newState;
                case `fix`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.autFax = action.obj.status;
                    return newState;
                case `remote`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.remPrint = action.obj.status;
                    return newState;
                case `emre`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.emr = action.obj.status;
                    return newState;



                case `his`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.histology = action.obj.status;
                    return newState;
                case `ngyn`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.ngyn = action.obj.status;
                    return newState;
                case `fish`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.fish = action.obj.status;
                    return newState;
                case `gyn`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.gyn = action.obj.status;
                    return newState;
                case `inh`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.inHouse = action.obj.status;
                    return newState;
                case `acls`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.acls = action.obj.status;
                    return newState;
                case `heart`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.heartSmart = action.obj.status;
                    return newState;
                case `dtex`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.dtex = action.obj.status;
                    return newState;
                case `igse`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.igs = action.obj.status;
                    return newState;
                default: return state;
            }

        default: return state;
    }
}

export const activeClientRow = (state = null, action) => {
    switch (action.type) {
        case `SET_CLIENT_ROW`:
            return action.index;

        default: return state;
    }
}

export const loc = (state = {}, action) => {
    switch (action.type) {
        case `SET_LOC`:
            return action.obj;

        default: return state;
    }
}

export const activeLocRow = (state = null, action) => {
    switch (action.type) {
        case `SET_LOC_ROW`:
            return action.index;

        default: return state;
    }
}

export const physs = (state = [], action) => {
    switch (action.type) {
        case `SET_PHUS`:
            return action.list;

        default: return state;
    }
}