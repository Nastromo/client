import API from '../../utils/Api';
import { showNotification } from './Notification';



export const setClients = (list) => ({
    type: 'SET_CLIETNS',
    list
});

export const setClient = (obj) => ({
    type: 'SET_CLIENT',
    obj
});

export const setActiveClientRow = (index) => ({
    type: 'SET_CLIENT_ROW',
    index
});

export const showClient = (i) => {
    return async (dispatch, getState) => {
        try {
            const clients = getState().clients;
            const client = clients[i];
            dispatch(setActiveClientRow(i));
            const logins = await API.get(`/v1/logins?id=${client.id}`);
            const locs = await API.get(`/v1/locations?id=${client.id}`);
            client.logins = logins.data;
            client.locs = locs.data;
            dispatch(setClient(client));
        } catch (err) {
            console.log(err);
        }
    }
}

export const getClients = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/clients`);
            dispatch(setClients(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const handleLogUpdate = (e) => {
    return async (dispatch, getState) => {
        try {
            const i = e.target.id;
            const logins = getState().client.logins;
            await API.post(`/v1/logins`, logins[i]);
            dispatch(showNotification(`Updated!`, `notification-blue`));
        } catch (err) {
            console.log(err);
        }
    }
}

export const changeLogin = (e) => ({
    type: 'SET_CLIENT',
    text: e.target.value,
    index: e.target.id,
});

export const changePass = (e) => ({
    type: 'SET_CLIENT',
    text: e.target.value,
    index: e.target.id,
});

export const setActiveLocRow = (index) => ({
    type: 'SET_LOC_ROW',
    index
});

export const setPhys = (list) => ({
    type: 'SET_PHUS',
    list
});

export const showLoc = (i) => {
    return async (dispatch, getState) => {
        try {
            const locs = getState().client.locs;
            const phys = await API.get(`/v1/physicians?id=${locs[i].id}`);
            dispatch(setPhys(phys.data));
            dispatch(setLoc(locs[i]));
            dispatch(setActiveLocRow(i));
        } catch (err) {
            console.log(err);
        }
    }
}

export const setLoc = (obj) => ({
    type: 'SET_LOC',
    obj
});