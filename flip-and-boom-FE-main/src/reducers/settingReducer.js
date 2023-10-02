import { SETMUSICSETTING, SETSFXAUDIOSETTING } from "../actionType";

const initialState = {
    music: true,
    SFX: true
}

export default function settingReducer(state = initialState, action) {
    switch (action.type) {
        case SETMUSICSETTING:
            return {
                ...state,
                music: action.payload
            }
        case SETSFXAUDIOSETTING:
            return {
                ...state,
                SFX: action.payload
            }
        default:
            return state
    }
}

