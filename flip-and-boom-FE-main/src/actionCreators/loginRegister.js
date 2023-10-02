import { redirect } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import { setErrorMessage, setResponseMessage } from "./messageModal";
import { setLoading } from "./fetchUserProfile";

export function actionLogin(payload) {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))
      const { data } = await axios({
        method: "post",
        url: API_URL + "/login",
        data: payload,
      });
      if (data.statusCode >= 400) {
        throw { message: data.message };
      }
      data.access_token
        ? localStorage.setItem("access_token", data.access_token)
        : null;
      data.access_token ? localStorage.setItem("email", payload.email) : null;
      dispatch(setLoading(false))
      dispatch(setResponseMessage('Success login'))
    } catch (error) {
      const errorMessage = error.response.data.message || error.message
      dispatch(setErrorMessage(errorMessage))
    }
  };
}

export function actionRegister(payload) {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))
      const { data } = await axios.post(API_URL + '/register', payload)
      
      if (data?.statusCode >= 400) {
        throw { message: data?.message };
      }
      // message succes
      dispatch(setLoading(false))
      dispatch(setResponseMessage('success register'))
    } catch (error) {
      const errorMessage = error.response.data.message || error.message
      dispatch(setErrorMessage(errorMessage))
    }
  };
}
