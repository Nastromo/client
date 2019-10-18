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

export const handleUpdate = (i) => {
    return async (dispatch, getState) => {
        try {
            
            const fd = new FormData();
            const files = getState().files;

            for (let j = 0; j < files.length; j++) {
                fd.append(`pdf`, files[j]);
            }
            
            const clients = await API.post(`/v1/pdf`, fd, {
                'Content-Type': `multipart/form-data`
            });
            
            dispatch(setClients(clients.data));
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



export const addPhy = (text) => {
    return async (dispatch, getState) => {
        try {
            const arr = text.split(` | `);
            const locId = getState().loc.id;
            const phys = await API.post(`/v1/physicians`, { phyId: arr[0], locId });
            dispatch(setPhys(phys.data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const delPhy = (e) => {
    return async (dispatch, getState) => {
        try {
            const phyId = e.target.id;
            const locId = getState().loc.id;
            const phys = await API.post(`/v1/physicians/del`, { phyId, locId });
            dispatch(setPhys(phys.data));
        } catch (err) {
            console.log(err);
        }
    }
}


export const setLoc = (obj) => ({
    type: 'SET_LOC',
    obj
});

export const changeName = (e) => ({
    type: 'SET_NAME',
    text: e.target.value
});

export const changeStreet = (e) => ({
    type: 'SET_STREET',
    text: e.target.value
});

export const changeCity = (e) => ({
    type: 'SET_CITY',
    text: e.target.value
});

export const changeZip = (e) => ({
    type: 'SET_ZIP',
    text: e.target.value
});

export const changePhone = (e) => ({
    type: 'SET_PHONE',
    text: e.target.value
});

export const changePhoneExt = (e) => ({
    type: 'SET_EXT',
    text: e.target.value
});

export const changeEmail = (e) => ({
    type: 'SET_EMAIL',
    text: e.target.value
});

export const changeStreetB = (e) => ({
    type: 'SET_STREETB',
    text: e.target.value
});

export const changeCityB = (e) => ({
    type: 'SET_CITYB',
    text: e.target.value
});

export const changeZipB = (e) => ({
    type: 'SET_ZIPB',
    text: e.target.value
});

export const changePhoneB = (e) => ({
    type: 'SET_PHONEB',
    text: e.target.value
});

export const changePhoneExtB = (e) => ({
    type: 'SET_EXTB',
    text: e.target.value
});

export const changeFaxB = (e) => ({
    type: 'SET_FAXB',
    text: e.target.value
});

export const changeEmailB = (e) => ({
    type: 'SET_EMAILB',
    text: e.target.value
});

export const changeNotes = (e) => ({
    type: 'SET_NOTEB',
    text: e.target.value
});

export const changeFax = (e) => ({
    type: 'SET_FAX',
    text: e.target.value
});

export const showPdfPreview = (files) => ({
    type: 'SET_PDF',
    files
});

export const bindPdf = (files) => ({
    type: 'SET_REAL_PDF',
    files
});

export const setPdf = (files) => ({
    type: 'SET_EDITED_PDF',
    files
});

