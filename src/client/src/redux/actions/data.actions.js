export const SET_SELECTED_DATA = 'SET_SELECTED_DATA';
export const DATA_NORMALIZING = 'DATA_NORMALIZING';
export const CLEAR_STORE = 'CLEAR_STORE';

export const dataNormalizing = ({ feature }) => ({
    type: `${feature} ${DATA_NORMALIZING}`,
    meta: { feature },
});

export const setSelectedData = ({ feature, idArray }) => ({
    type: `${feature} ${SET_SELECTED_DATA}`,
    payload: idArray,
    meta: { feature },
});

export const clearStore = () => ({
    type: CLEAR_STORE,
});