
import { actionTypes } from './actionTypes'

const INITIAL_STATE = {
    user: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_USER:
            return {
                ...state,
                user: action.payload
            }

        case actionTypes.REMOVE_USER:
            return {
                ...state,
                user: null
            }

        default:
            return state
    }
}

export default userReducer