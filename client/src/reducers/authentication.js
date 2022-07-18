import { AUTHENTICATION, LOGOUT } from "../constants/actionTypes";

const authenticationReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTHENTICATION:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

            return {
                ...state,
                authData: action?.data
            }
        case LOGOUT:
            localStorage.clear();

            return {
                ...state,
                authData: null
            }

        default:
            return state;
    }
}

export default authenticationReducer;