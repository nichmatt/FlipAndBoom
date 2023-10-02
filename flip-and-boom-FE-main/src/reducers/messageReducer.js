import { SETERRORMESSAGE, SETRESPONSEMESSAGE } from "../actionType"

const initialState = {
    error: '',
    message: ''
}

export default function messageReducer(state = initialState, action) {
    switch (action.type) {
        case SETERRORMESSAGE:
            return {
                ...state,
                error: action.payload
            }
        case SETRESPONSEMESSAGE:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}