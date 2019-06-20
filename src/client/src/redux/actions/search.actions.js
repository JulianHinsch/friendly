export const SEARCH = '[Search]';

export const FETCH_SEARCH_RESULTS = `${SEARCH} FETCH`;

export const fetchSearchResults = ({ query }) => ({
    type: FETCH_SEARCH_RESULTS,
    payload: query,
});