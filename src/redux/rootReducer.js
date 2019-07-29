import { actionTypes } from './actionTypes'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const INITIAL_STATE = {
    counter: 1,
    loading: false
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }

        case actionTypes.RESET:
            return {
                ...state,
                counter: 0
            }

        case actionTypes.SET:
            return {
                ...state,
                counter: action.number
            }

        case actionTypes.TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }

        default:
            return state

    }
}

const persistConfig = {
    key: 'root',
    storage
}

export default persistReducer(persistConfig, rootReducer)