import axios from "axios";
import { API_URL } from "../config";
import { FETCHNEWS } from "../actionType";
import { setLoading } from "./fetchUserProfile";
import { setErrorMessage } from "./messageModal";
import { redirect } from "react-router-dom";

export function setNewsData(payload) {
  return {
    type: FETCHNEWS,
    payload,
  };
}

export function fetchNews() {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios.get(API_URL + "/news");
      dispatch(setNewsData(data));
    } catch (error) {
      let messageError = error.message;
      dispatch(setErrorMessage(messageError));
      // error handle
    } finally {
      dispatch(setLoading(false));
    }
  };
}
