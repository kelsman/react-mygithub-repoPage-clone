import axios from 'axios';

import { repoActionTypes } from '../../Action.types';


const rootUrl = 'https://api.github.com'
export const getRepos = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://api.github.com/users/kelwaffi/repos?q=created:');
            console.log(res);
            dispatch({ type: repoActionTypes.FETCH_REPOS_SUCCESS, payload: res.data })
        } catch (error) {
            if (error) {
                dispatch({ type: repoActionTypes.FETCH_REPOS_FAIL, payload: error })
            }
        }
    }
};

export const setLoadingState = () => {
    return {
        type: "SET_LOADING_STATE",
        payload: true
    }
};


export const searchRepo = (searchValue) => {
    return async (dispatch) => {

        try {
            const res = await axios.get(`${rootUrl}/users/kelwaffi/repo/q=${searchValue}}`);
            if (res) {

                dispatch({ type: "SEARCH_REPO_SUCCESS", payload: res.data });

            }
        } catch (error) {
            if (error) {
                dispatch({ type: "SEARCH_REPO_FAIL", payload: error })
            }
        }

    }
}

export const searchValue = (value) => {
    return {
        type: "SEARCH_REPO_SUCCESS",
        payload: value
    }
}
