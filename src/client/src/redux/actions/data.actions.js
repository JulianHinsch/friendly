export const DATA_NORMALIZED = 'DATA_NORMALIZED';
export const CLEAR_STORE = 'CLEAR_STORE';

export const dataNormalized = ({ feature }) => ({
    type: `${feature} ${DATA_NORMALIZED}`,
    meta: { feature },
});

export const clearStore = () => ({
    type: CLEAR_STORE,
})