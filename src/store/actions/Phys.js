import API from '../../utils/Api';

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
            dispatch(showPhy(list[i]));
        } catch (err) {
            console.log(err);
        }
    }
}