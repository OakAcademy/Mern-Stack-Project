import { combineReducers } from "redux";

import stories from "./stories";
import authentication from "./authentication";

export default combineReducers({
    stories,
    authentication
});