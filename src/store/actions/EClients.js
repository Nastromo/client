import API from '../../utils/Api';
import { showNotification } from './Notification';
import { getGroups } from './Groups';



export const setEClients = (list) => ({
    type: 'SET_E_CLIENTS',
    list
});

export const changeEmail = (e) => ({
    type: 'SET_E_EMAIL',
    text: e.target.value,
});

export const changePass = (e) => ({
    type: 'SET_E_PASS',
    text: e.target.value,
});

export const changePhone = (e) => ({
    type: 'SET_E_PHONE',
    text: e.target.value,
});

export const changeStreet = (e) => ({
    type: 'SET_E_STREET',
    text: e.target.value,
});

export const changeName = (e) => ({
    type: 'SET_E_NAME',
    text: e.target.value,
});

export const changeState = (e) => ({
    type: 'SET_E_STATE',
    text: e.target.value,
});

export const changeZip = (e) => ({
    type: 'SET_E_ZIP',
    text: e.target.value,
});

export const getClients = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/eclients`);
            dispatch(setEClients(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const setEClient = (obj) => ({
    type: 'SET_E_CLIENT',
    obj
});

export const setEPayments = (list) => ({
    type: 'SET_E_PAYMENTS',
    list
});

export const setActiveRow = (i) => ({
    type: 'SET_ACTIVE_RAW_E_C',
    i
});

export const showClient = (i) => {
    return async (dispatch, getState) => {
        try {
            const client = getState().eclients[i];
            const res = await API.get(`/v1/epayments?id=${client.id}`);
            dispatch(getGroups())
            dispatch(setActiveRow(i))
            dispatch(setEClient(client));
            dispatch(setEPayments(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const setEClientMode = (bool) => ({
    type: 'SET_E_C_MODE',
    bool
});

export const createClientMode = (bool) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setEClientMode(bool));
            dispatch(setEClient({}));
            dispatch(setEPayments([]));
        } catch (err) {
            console.log(err);
        }
    }
}

export const pay = (qty, amount) => {
    return async (dispatch, getState) => {
        try {
            const client = getState().eclient;
            const test = getState().etest;
            window.location.href = `http://localhost:17000/pay-client?clientId=${client.id}&clientName=${client.name}&testTitle=${test}&qty=${qty}&amount=${amount}`;
        } catch (err) {
            console.log(err);
        }
    }
}

export const update = () => {
    return async (dispatch, getState) => {
        try {
            const client = getState().eclient;
            await API.put(`/v1/eclients`, client);
            dispatch(showNotification(`Client updated!`, `notification-green`));
        } catch (err) {
            console.log(err);
        }
    }
}

export const create = () => {
    return async (dispatch, getState) => {
        try {
            const client = getState().eclient;
            const res = await API.post(`/v1/eclients`, client);
            
            dispatch(setEClientMode(false));
            dispatch(setEClients(res.data));
            dispatch(showClient(0));
            dispatch(showNotification(`Client created!`, `notification-green`));
        } catch (err) {
            console.log(err);
        }
    }
}



