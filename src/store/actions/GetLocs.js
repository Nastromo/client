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