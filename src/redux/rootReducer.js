import { actionTypes } from './actionTypes'

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

        case actionTypes.TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }

        default:
            return state

    }
}

export default rootReducer