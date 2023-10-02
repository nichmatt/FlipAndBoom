import { FETCHSHOP, FILTERITEMSHOP } from "../actionType";
import axios from "axios";
import { API_URL } from "../config";
import { setErrorMessage } from "./messageModal";
import { setLoading } from "./fetchUserProfile";
import { redirect } from "react-router-dom";
export function actionSetShopData(payload) {
  return {
    type: FETCHSHOP,
    payload,
  };
}

export function actionFilterShopData(payload) {
  return {
    type: FILTERITEMSHOP,
    payload,
  };
}

export function fetchShopData() {
  return async function (dispatch, getState) {
    try {
      dispatch(setLoading(true))
      const token = localStorage.getItem("access_token")
      if (!token) {
        redirect('/')
        throw { message: 'Invalid session' }
      }
      const response = await axios.get(API_URL + "/items", {
        headers: {
          access_token: token
        },
      });
      const result = await response.data;
      dispatch(actionSetShopData(result));
    } catch (error) {
      let message = error.response.data.message || error.message
      dispatch(setErrorMessage(message))
    } finally {
      dispatch(setLoading(false))
    }
  };
}
