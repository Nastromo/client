import API from '../../utils/Api';
import { showNotification } from './Notification';





export const setGroups = (list) => ({
    type: 'SET_GROUPS',
    list
});

export const getGroups = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/groups`);
            dispatch(setGroups(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const setGroup = (obj) => ({
    type: 'SET_GROUP',
    obj
});

export const showGroup = (i) => {
    return async (dispatch, getState) => {
        try {
            const group = getState().groups[i];
            dispatch(setGroup(group));
        } catch (err) {
            console.log(err);
        }
    }
}

export const changeGroupName = (e) => ({
    type: 'CHANGE_G_NAME',
    text: e.target.value
});

export const changeComment = (e) => ({
    type: 'CHANGE_G_COMMENT',
    text: e.target.value
});

export const addRep = (text) => ({
    type: 'ADD_REP',
    text
});

export const deleteRep = (e) => ({
    type: 'DEL_REP',
    index: e.target.id
});

export const updateGroup = () => {
    return async (dispatch, getState) => {
        try {
            const group = getState().group;
            await API.post(`/v1/groups`, group);
            dispatch(showNotification(`Group updated!`, `notification-green`));
        } catch (err) {
            console.log(err);
        }
    }
}

export const createGroup = () => {
    return async (dispatch, getState) => {
        try {
            const group = getState().group;
            const res = await API.post(`/v1/groups`, group);
            dispatch(showNotification(`Group created!`, `notification-green`));
            dispatch(setGroups(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const setCMode = (bool) => ({
    type: 'SET_CREATE_GROUP',
    bool
});

export const createMode = (bool) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setCMode(bool));
            dispatch(setGroup({}));
        } catch (err) {
            console.log(err);
        }
    }
}




