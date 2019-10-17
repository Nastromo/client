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

export const showClient = (i) => {
    return async (dispatch, getState) => {
        try {
            const clients = getState().clients;
            const client = clients[i];
            const logins = await API.get(`/v1/logins?id=${client.id}`);
            // const locs = await API.get(`/v1/locations?id=${client.id}`);
            // const phys = await API.get(`/v1/physicians?id=${client.id}`);
            console.log(logins.data)
            client.logins = logins.data;
            // client.locs = locs.data;
            // client.phys = phys.data;
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