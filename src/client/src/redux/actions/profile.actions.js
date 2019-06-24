export const PROFILE= '[Profile]';
export const FETCH_PROFILE = `${PROFILE} FETCH`;

export const fetchProfile = ({ userId, limit, offset }) => ({
    type: FETCH_PROFILE,
    payload: userId,
    meta: {
        limit,
        offset,
    }
});