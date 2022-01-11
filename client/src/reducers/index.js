import { combineReducers } from "redux";

import stories from "./stories";
import authentications from "./authentications";

export default combineReducers({
  authentications,
  stories,
});
