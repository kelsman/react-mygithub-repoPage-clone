import { repoActionTypes } from '../Action.types';


const initState = {
    loading: true,
    repos: null,
    error: '',
    searcheValue: ''
};


const RepoReducer = (state = initState, action) => {

    switch (action.type) {
        case repoActionTypes.FETCH_REPOS_SUCCESS:
            return {
                ...state,
                loading: false,
                repos: action.payload
            }
        case repoActionTypes.FETCH_REPOS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "SET_LOADING_STATE":
            return {
                ...state,
                loading: true
            };
        case "SEARCH_REPO_SUCCESS":
            return {
                ...state,
                loading: false,
                searchedRepo: action.payload
            };
        case "SEARCH_REPO_FAIL":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
};
export default RepoReducer;