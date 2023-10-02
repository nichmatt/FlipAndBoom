import { FETCHNEWS } from "../actionType";

const initialState = {
    news: []
}


export default function newsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHNEWS:
            return {
                ...state,
                news: action.payload
            }
        default:
            return state
    }
}
