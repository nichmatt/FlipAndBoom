import { FETCHSHOP, FILTERITEMSHOP } from "../actionType";

const initialState = {
  datas: [],
  filter: [],
};

function fetchShopReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHSHOP:
      return {
        ...state,
        datas: action.payload,
      };
    case FILTERITEMSHOP:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export default fetchShopReducer;
