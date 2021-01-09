import { combineReducers } from 'redux'
import userReducer from './Reducers/userReducer.js'
import RepoReducer from './Reducers/repoReducer';
const rootReducer = combineReducers({
    user: userReducer,
    repo: RepoReducer
});

export default rootReducer;