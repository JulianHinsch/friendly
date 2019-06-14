export const DATA_NORMALIZING = 'DATA_NORMALIZING';
export const CLEAR_STORE = 'CLEAR_STORE';

export const dataNormalizing = ({ feature }) => ({
    type: `${feature} ${DATA_NORMALIZING}`,
    meta: { feature },
});

export const clearStore = () => ({
    type: CLEAR_STORE,
});