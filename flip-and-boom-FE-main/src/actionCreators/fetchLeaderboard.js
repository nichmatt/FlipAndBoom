import { GETLEADERBOARD, FILTERLEADERBOARD } from "../actionType";
import axios from "axios";
import { setErrorMessage } from "./messageModal";
import { API_URL } from "../config";
import { setLoading } from "./fetchUserProfile";
import { redirect } from "react-router-dom";

export function actionSetLeaderboardData(payload) {
  return {
    type: GETLEADERBOARD,
    payload,
  };
}

export function actionFilterLeaderboardData(payload) {
  return {
    type: FILTERLEADERBOARD,
    payload,
  };
}

export function getLeaderboard(difficulty = "easy") {
  return async function (dispatch, getState) {
    try {
      dispatch(setLoading(true))
      const token = localStorage.getItem("access_token");
      if (!token) {
        redirect('/')
        throw { message: 'Invalid session' }
      }
      const response = await axios.get(
        `${API_URL}/leaderboard?difficulty=${difficulty}`,
        {
          headers: {
            access_token: token,
          },
        }
      );
      const result = await response.data;
      dispatch(actionSetLeaderboardData(result));
    } catch (error) {
      const message = error.response.data.message || error.message
      dispatch(setErrorMessage())
    } finally {
      dispatch(setLoading(false))
    }
  };
}
