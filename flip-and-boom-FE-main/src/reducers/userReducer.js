import { FETCHUSERPROFILE, LOADINGSTATE, SETINVENTORIES } from "../actionType";

const initilaState = {
    loading: false,
    inventories: [],
    profile: {}
}
function userReducer(state = initilaState, action) {
    switch (action.type) {
        case FETCHUSERPROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case LOADINGSTATE:
            return {
                ...state,
                loading: action.payload
            }
        case SETINVENTORIES:
            return {
                ...state,
                inventories: action.payload
            }
        default:
            return state
    }
}

export default userReducer