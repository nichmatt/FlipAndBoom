import axios from "axios";
import { fetchUserProfile, setLoading } from "./fetchUserProfile";
import { API_URL } from "../config";
import { setErrorMessage, setResponseMessage } from "./messageModal";
import { MIDTRANSSETOKEN } from "../actionType";

export const getTokenMidtrans = (payload) => {
  return {
    type: MIDTRANSSETOKEN,
    payload,
  };
};

export function fetchGetTokenMidtrans(amount) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios.post(
        API_URL + "/user/token-midtrans",
        { amount },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      dispatch(getTokenMidtrans(data.token));
    } catch (error) {
      dispatch(setErrorMessage(error.response.data.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
}
export function fetchSuccesPayment(payload) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios.post(API_URL + "/user/topup", payload, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchUserProfile());
      dispatch(getTokenMidtrans(""));
      dispatch(setResponseMessage(data.message));
    } catch (error) {
      dispatch(setErrorMessage(error.response.data.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function fetchBuyItem(payload) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data, status } = await axios.post(API_URL + "/buyItem", payload, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchUserProfile());
      dispatch(setLoading(false));
      if (!payload.price) {
        dispatch(setResponseMessage(data.message));
      }
    } catch (error) {
      dispatch(fetchUserProfile());
      dispatch(setLoading(false));
      dispatch(setErrorMessage(error.response.data.message));
    }
  };
}
