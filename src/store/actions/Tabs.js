export const isActive = (bool) => ({
    type: 'SET_ACTIVE',
    bool
});

export const addOrder = (text) => ({
    type: 'ADD_ORDER',
    text
});

export const delOrder = (e) => ({
    type: 'DEL_ORDER',
    index: e.target.id
});

export const addDiag = (text) => ({
    type: 'ADD_DIAG',
    text
});

export const delDiag = (e) => ({
    type: 'DEL_DIAG',
    index: e.target.id
});