import API from '../../utils/Api';
import { showNotification } from './Notification';


export const setCreate = (bool) => ({
    type: 'SET_CREATE_MODE_PHY',
    bool
});

export const setCreateMode = (bool) => {
    return async (dispatch, getState) => {
        dispatch(showPhy({}));
        dispatch(setCreate(bool));
    }
};

export const setPhys = (list) => ({
    type: 'SET_PHYS',
    list
});

export const showPhy = (obj) => ({
    type: 'SHOW_PHYS',
    obj
});


export const delCred = (e) => ({
    type: 'DEL_CRED',
    index: e.target.id
});

export const getPhys = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/phys`);
            dispatch(setPhys(res.data));
            dispatch(showPhy(res.data[0]));
        } catch (err) {
            console.log(err);
        }
    }
}

export const setPhy = (i) => {
    return async (dispatch, getState) => {
        try {
            const list = getState().phys;
            dispatch(setActivePhyRow(i));
            dispatch(showPhy(list[i]));
        } catch (err) {
            console.log(err);
        }
    }
}

export const changeNpi = (e) => ({
    type: 'SET_NPI',
    text: e.target.value
});

export const changeName = (e) => ({
    type: 'SET_NAME',
    text: e.target.value
});

export const changeLast = (e) => ({
    type: 'SET_LAST',
    text: e.target.value
});

export const changeMid = (e) => ({
    type: 'SET_MID',
    text: e.target.value
});

export const changeId = (e) => ({
    type: 'SET_ID',
    text: e.target.value
});

export const setActivePhyRow = (index) => ({
    type: 'SET_PHY_ROW',
    index
});


export const handleCreate = () => {
    return async (dispatch, getState) => {
        const elem = getState().phy;
        const { creds, last, name, npi, pecos } = elem;
        if (creds && last && name && npi && pecos) {
            try {
                const res = await API.post(`/v1/create-phy`, elem);
                dispatch(setPhys(res.data));
                dispatch(setActivePhyRow(0));
                dispatch(setCreateMode(false));
                dispatch(showNotification(`Created!`, `notification-green`));
                dispatch(showPhy(res.data[0]));
            } catch (err) {
                console.log(err);
            }
        } else {
            dispatch(showNotification(`Required fields: NPI, First Name, Last Name, PECOS, Credentials!`, `notification-show`));
        }
    }
}

export const handleUpdate = () => {
    return async (dispatch, getState) => {
        const elem = getState().phy;
        try {
            const res = await API.post(`/v1/update-phy`, elem);
            dispatch(setPhys(res.data));
            dispatch(showNotification(`Updated!`, `notification-blue`));
        } catch (err) {
            console.log(err);
        }
    }
}