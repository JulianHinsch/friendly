export const SET_SELECTED_DATA = 'SET_SELECTED_DATA';
export const NORMALIZE_DATA = 'NORMALIZE_DATA';
export const CLEAR_STORE = 'CLEAR_STORE';

export const normalizeData = ({ feature, data }) => ({
    type: `${feature} ${NORMALIZE_DATA}`,
    payload: data,
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