export const clients = (state = [], action) => {
    switch (action.type) {
        case `SET_CLIETNS`:
            return action.list;

        default: return state;
    }
}

export const files = (state = ``, action) => {
    switch (action.type) {
        case `SET_REAL_PDF`:
            return action.files;

        default: return state;
    }
}

export const createLoc = (state = false, action) => {
    switch (action.type) {
        case `CREATE_LOC_MODE`:
            return action.bool;

        default: return state;
    }
}

export const createClient = (state = false, action) => {
    switch (action.type) {
        case `CREATE_CLIENT_MODE`:
            return action.bool;

        default: return state;
    }
}

export const logins = (state = [], action) => {
    let newState;
    switch (action.type) {
        case `SET_CLIENT_LOGINS`:
            newState = JSON.parse(JSON.stringify(state));
            newState = action.list
            return newState;

        case `CHANGE_LOGIN`:
            newState = JSON.parse(JSON.stringify(state));
            newState[action.index].login = action.text;
            return newState;

        case `CHANGE_PASS`:
            newState = JSON.parse(JSON.stringify(state));
            newState[action.index].pass = action.text;
            return newState;

        default: return state;
    }
}

export const client = (state = null, action) => {
    let newState, pdfs;
    switch (action.type) {
        case `SET_CLIENT`:
            newState = JSON.parse(JSON.stringify(state));
            newState = action.obj
            return newState;

        case `SET_STAT_OPTION`:
            newState = JSON.parse(JSON.stringify(state));
            newState.repOpt = action.obj.option;
            return newState;

        case `SET_CLIENT_NAME`:
            newState = JSON.parse(JSON.stringify(state));
            newState.title = action.text;
            return newState;

        case `SET_PDF`:
            newState = JSON.parse(JSON.stringify(state));
            pdfs = JSON.parse(newState.pdf ? newState.pdf : "[]");
            for (let i = 0; i < action.files.length; i++) {
                pdfs.push(action.files[i]);
            }
            newState.pdf = JSON.stringify(pdfs);
            return newState;

        case `DEL_PDF`:
            newState = JSON.parse(JSON.stringify(state));
            pdfs = JSON.parse(newState.pdf ? newState.pdf : "[]");
            pdfs.splice(action.index, 1);
            newState.pdf = JSON.stringify(pdfs);
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

export const loc = (state = null, action) => {
    let newState;
    switch (action.type) {
        case `SET_LOC`:
            return action.obj;

        case `SET_STATE_OPTION`:
            newState = JSON.parse(JSON.stringify(state));
            newState.state = action.obj.option;
            return newState;

        case `SET_STATEB_OPTION`:
            newState = JSON.parse(JSON.stringify(state));
            newState.stateB = action.obj.option;
            return newState;

        case `SET_NAME`:
            newState = JSON.parse(JSON.stringify(state));
            newState.name = action.text;
            return newState;

        case `SET_STREET`:
            newState = JSON.parse(JSON.stringify(state));
            newState.street = action.text;
            return newState;

        case `SET_CITY`:
            newState = JSON.parse(JSON.stringify(state));
            newState.city = action.text;
            return newState;

        case `SET_ZIP`:
            newState = JSON.parse(JSON.stringify(state));
            newState.zip = action.text;
            return newState;

        case `SET_PHONE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.phone = action.text;
            return newState;

        case `SET_EXT`:
            newState = JSON.parse(JSON.stringify(state));
            newState.phoneExt = action.text;
            return newState;

        case `SET_EMAIL`:
            newState = JSON.parse(JSON.stringify(state));
            newState.email = action.text;
            return newState;

        case `SET_STREETB`:
            newState = JSON.parse(JSON.stringify(state));
            newState.streetB = action.text;
            return newState;

        case `SET_CITYB`:
            newState = JSON.parse(JSON.stringify(state));
            newState.cityB = action.text;
            return newState;

        case `SET_ZIPB`:
            newState = JSON.parse(JSON.stringify(state));
            newState.zipB = action.text;
            return newState;

        case `SET_PHONEB`:
            newState = JSON.parse(JSON.stringify(state));
            newState.phoneB = action.text;
            return newState;

        case `SET_EXTB`:
            newState = JSON.parse(JSON.stringify(state));
            newState.phoneExtB = action.text;
            return newState;

        case `SET_FAXB`:
            newState = JSON.parse(JSON.stringify(state));
            newState.faxB = action.text;
            return newState;

        case `SET_EMAILB`:
            newState = JSON.parse(JSON.stringify(state));
            newState.emailB = action.text;
            return newState;

        case `SET_NOTEB`:
            newState = JSON.parse(JSON.stringify(state));
            newState.notes = action.text;
            return newState;

        case `SET_FAX`:
            newState = JSON.parse(JSON.stringify(state));
            newState.fax = action.text;
            return newState;



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