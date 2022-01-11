import { AUTHENTICATION } from "../constants/actionTypes";
import * as api from "../api";

const signup = (formValues, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signup(formValues);

    dispatch({ type: AUTHENTICATION, data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

const login = (formValues, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formValues);

    dispatch({ type: AUTHENTICATION, data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export { login, signup };
