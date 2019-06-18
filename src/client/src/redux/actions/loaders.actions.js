export const SET_LOADER = 'SET_LOADER';

export const setLoader = ({ loading, feature }) => ({
    type: `${feature} ${SET_LOADER}`,
    payload: loading,
    meta: { feature }
});