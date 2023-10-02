import axios from 'axios'
import { pause } from '../helpers'
import { FETCHUSERPROFILE, LOADINGSTATE, SETINVENTORIES } from "../actionType";
import { API_URL } from '../config/index'
import { setErrorMessage, setResponseMessage } from './messageModal';
import { redirect } from 'react-router-dom';
export function setProfile(payload) {
    return {
        type: FETCHUSERPROFILE,
        payload
    }
}

export function setUserInventories(payload) {
    return {
        type: SETINVENTORIES,
        payload
    }
}

export function setLoading(payload) {
    return {
        type: LOADINGSTATE,
        payload
    }
}


export function fetchUserProfile() {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const token = localStorage.getItem('access_token')
            if (!token) {
                redirect('/')
                throw { message: 'Invalid session' }
            }
            const { data } = await axios.get(API_URL + '/profile',
                {
                    headers:
                        { access_token: token }
                })

            dispatch(setProfile(data))
            dispatch(setUserInventories(data.Inventories))
            dispatch(setLoading(false))
        } catch (error) {
            const message = error.response.data.message || error.message
            dispatch(setErrorMessage(message))
            dispatch(setLoading(false))
        }
    }
}

export function setUserSelectedItem(payload) {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const token = localStorage.getItem('access_token')
            if (!token) {
                redirect('/')
                throw { message: 'Invalid session' }
            }
            const data = await axios.put(API_URL + '/update', payload, {
                headers: {
                    'access_token': token
                }
            })
            dispatch(fetchUserProfile())
            dispatch(setLoading(false))
            dispatch(setResponseMessage('success change'))
        } catch (error) {
            const messageError = error.response.data.message || error.message
            dispatch(setLoading(false))
            dispatch(setErrorMessage(messageError))

        }
    }
}