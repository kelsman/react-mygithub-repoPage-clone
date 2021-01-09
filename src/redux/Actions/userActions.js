import { userActionsTypes } from '../Action.types';
import axios from "axios";


export const fetchUserInfo = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://api.github.com/users/kelwaffi');

            dispatch({ type: userActionsTypes.FETCH_USER_INFO_SUCCESS, payload: res.data });
        } catch (error) {
            if (error) {
                dispatch({ type: userActionsTypes.FETCH_USER_INFO_FAILURE, payload: error })
            }
        }
    }
}