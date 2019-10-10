import API from '../../utils/Api';

export const setLocs = (list) => ({
    type: 'SET_LOCS',
    list
});

export const getLocs = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/locs`);
            dispatch(setLocs(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const goToClients = (i) => {
    return async (dispatch, getState) => {
        try {
            const clientId = getState().locs[i].clientId;
            window.location.href = `/account/clients?clientId=${clientId}`;
        } catch (err) {
            console.log(err);
        }
    }
}