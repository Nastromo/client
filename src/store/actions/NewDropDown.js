export const showDropDown = (obj) => ({
    type: 'SHOW_NEW_DROP_DOWN',
    obj
});

export const setOption = (obj) => {
    if (obj.actionType) {
        return {
            type: obj.actionType,
            obj
        }
    } else {
        return {
            type: 'SET_NEW_DROP_DOWN_OPTION',
            obj
        }
    }
};

