export const setOption = (obj) => {
    return async (dispatch, getState) => {
        switch (obj.id) {
            case `billStates`:
                dispatch(setAccOpt(obj));
                break;

            case `date`:
                dispatch(setAccOpt(obj));
                break;

            case `fasting`:
                dispatch(setAccOpt(obj));
                break;

            case `stat`:
                dispatch(setAccOpt(obj));
                break;

            case `orderType`:
                dispatch(setAccOpt(obj));
                break;

            case `bills`:
                dispatch(setAccOpt(obj));
                break;

            case `state`:
                dispatch(setAccOpt(obj));
                break;

            case `sex`:
                dispatch(setAccOpt(obj));
                break;

            default: dispatch(setOpt(obj));
        }
    }
};

export const setAccOpt = (obj) => ({
    type: 'SET_DROP_DOWN_OPTION_ACC',
    obj
});

export const setOpt = (obj) => ({
    type: 'SET_DROP_DOWN_OPTION',
    obj
});

export const showDropDown = (obj) => ({
    type: 'SHOW_DROP_DOWN',
    obj
});

