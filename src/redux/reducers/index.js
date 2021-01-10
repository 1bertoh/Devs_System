import { combineReducers} from "redux";
import getDevs from "./getDevs";
import getDevId from "./getDevId";
import getComment from "./getComment";
import changeTheme from "./changeTheme";

const rootReducer = combineReducers({
    getDevs,
    getDevId,
    getComment,
    changeTheme,
});

export default rootReducer
