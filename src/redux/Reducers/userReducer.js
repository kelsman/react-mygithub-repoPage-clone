
import { userActionsTypes } from '../Action.types';


const initState = {
    loading: true,
    user: null,
    error: ''

};

const userReducer = (state = initState, { type, payload }) => {

    switch (type) {
        case userActionsTypes.FETCH_USER_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload
            };
        case userActionsTypes.FETCH_USER_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }

};

export default userReducer