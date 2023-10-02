import { SETERRORMESSAGE, SETRESPONSEMESSAGE } from "../actionType"

export const setErrorMessage = (payload) => {
    return {
        type: SETERRORMESSAGE,
        payload
    }
}

export const setResponseMessage = (payload) => {
    return {
        type: SETRESPONSEMESSAGE,
        payload
    }
}

