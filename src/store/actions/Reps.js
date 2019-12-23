import API from '../../utils/Api';
import { showNotification } from './Notification';




export const setReps = (list) => ({
    type: 'SET_REPS',
    list
});

export const getReps = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/reps`);
            dispatch(setReps(res.data));
            // dispatch(showRep(0));
        } catch (err) {
            console.log(err);
        }
    }
}

export const updateRep = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.put(`/v1/rep`, getState().rep);
            dispatch(showNotification(`Done...`, `notification-show notification-green`));
            dispatch(setReps(res.data));
            dispatch(setCreateMode(false));
        } catch (err) {
        console.log(err);
    }
}
}

export const showRepSide = (bool) => ({
    type: 'SHOW_REP_SIDE',
    bool
});


export const showRep = (index) => {
    return async (dispatch, getState) => {
        const list = getState().reps;
        dispatch(showRepSide(true));
        dispatch(setRep(list[index]));
        dispatch(setActiveRow(index));
        dispatch(setCreateMode(false));
    }
}

export const setMode = (bool) => {
    return async (dispatch, getState) => {
        dispatch(showRepSide(true));
        dispatch(setRep({}));
        dispatch(setCreateMode(bool));
    }
}

export const setRep = (obj) => ({
    type: 'SET_REP',
    obj
});

export const setActiveRow = (index) => ({
    type: 'SET_ACTIVE_REP_ROW',
    index
});

export const setCreateMode = (bool) => ({
    type: 'SET_CREATE_MODE_REPS',
    bool
});

export const changeFirst = (e) => ({
    type: 'SET_FIRST_NAME',
    text: e.target.value
});

export const changeLast = (e) => ({
    type: 'SET_LAST_NAME',
    text: e.target.value
});

export const changePhone = (e) => ({
    type: 'SET_PHONE_REP',
    text: e.target.value
});

export const changeEmail = (e) => ({
    type: 'SET_EMAIL_REP',
    text: e.target.value
});

export const changeDate = (e) => ({
    type: 'SET_DATE',
    text: e.target.value
});

export const changeComment = (e) => ({
    type: 'SET_COMMENT',
    text: e.target.value
});