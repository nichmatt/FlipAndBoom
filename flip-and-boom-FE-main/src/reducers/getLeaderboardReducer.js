import { GETLEADERBOARD, FILTERLEADERBOARD } from "../actionType";

const initialState = {
  data: [],
  filter: [],
};

function getLeaderboardReducer(state = initialState, action) {
  switch (action.type) {
    case GETLEADERBOARD:
      return {
        ...state,
        data: action.payload,
      };
    case FILTERLEADERBOARD:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export default getLeaderboardReducer;
