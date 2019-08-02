import API from '../../utils/Api';



export const setQuery = (obj) => ({
    type: 'SET_QUERY',
    obj
});

export const setLoading = (obj) => ({
    type: 'SET_LOAD_STATUS',
    obj
});

export const setResults = (obj) => ({
    type: 'SET_RESULTS_LIST',
    obj
});

export const setActiveRow = (index) => ({
    type: 'SET_ACTIVE_ROW',
    index
});

export const setChosenItem = (obj) => ({
    type: 'SET_CHOSEN_ITEM',
    obj
});

export const itemClick = (obj) => {
    return async (dispatch, getState) => {
        dispatch(setQuery({
            id: obj.id,
            text: obj.text
        }));
        dispatch(setResults({
            id: obj.id,
            list: []
        }));
    }
}


export const getResults = (searchInputId, url, searchQuery) => {
    return async (dispatch, getState) => {
        try {

            dispatch(setQuery({
                id: searchInputId,
                text: searchQuery
            }));

            dispatch(setLoading({
                id: searchInputId,
                bool: true
            }));

            const res = await API.get(`/v1/${url}?key=${searchQuery}`);

            dispatch(setLoading({
                id: searchInputId,
                bool: false
            }));

            dispatch(setResults({
                id: searchInputId,
                list: res.data
            }));

        } catch (err) {
            console.log(err);
        }
    }
}