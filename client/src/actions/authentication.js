import * as api from "../api";
import {
    AUTHENTICATION
} from "../constants/actionTypes";

const signup = (formValues, navigate) => async dispatch => {
    try {
        const { data } = await api.signup(formValues);
        dispatch({
            type: AUTHENTICATION,
            data: data
        });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

const login = (formValues, navigate) => async dispatch => {
    try {
        const { data } = await api.login(formValues);
        dispatch({
            type: AUTHENTICATION,
            data: data
        });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

export { signup, login };