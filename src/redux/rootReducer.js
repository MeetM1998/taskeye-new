import { combineReducers } from "redux";
import authReducer from "./slice/auth/authSlice";
import titleScreenReducer from "./slice/titleScreen/titleScreenSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    titleScreen: titleScreenReducer,
});

export default rootReducer;