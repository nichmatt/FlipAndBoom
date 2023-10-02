import axios from 'axios'
import { API_URL } from '../config'
import { setLoading } from './fetchUserProfile'
import { setErrorMessage } from './messageModal'
export const fetchUserScoreExp = (payload) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const { data } = await axios.patch(API_URL + '/updateScore', payload, {
                headers: {
                    'access_token': localStorage.getItem('access_token')
                }
            })
        } catch (error) {
            dispatch(setErrorMessage(error.response.data.message))
        } finally {
            dispatch(setLoading(true))
        }
    }
}