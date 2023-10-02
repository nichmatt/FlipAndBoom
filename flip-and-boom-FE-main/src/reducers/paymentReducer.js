import { MIDTRANSCHANGESTATUSPAYMENT, MIDTRANSSETOKEN } from "../actionType";

const initialState = {
    token: '',
    status: ''
}


const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case MIDTRANSSETOKEN:
            return {
                ...state,
                token: action.payload
            }
        case MIDTRANSCHANGESTATUSPAYMENT:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state
    }
}

export default paymentReducer