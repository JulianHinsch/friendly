export const FEED = '[Feed]';
export const FETCH_FEED = `${FEED} FETCH`;

export const fetchFeed = ({ userId, limit, offset }) => ({
    type: FETCH_FEED,
    payload: userId,
    meta: {
        limit,
        offset
    },
});