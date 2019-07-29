import { actionTypes } from './actionTypes'

const delay = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
})

export const add = () => ({
    type: actionTypes.INCREMENT
})

export const subtract = () => ({
    type: actionTypes.DECREMENT
})

export const reset = () => ({
    type: actionTypes.RESET
})

export const loading = () => ({
    type: actionTypes.TOGGLE_LOADING
})

export const incrementAsync = (ms) => ({
    type: actionTypes.INCREMENT_ASYNC,
    payload: ms
})

export const calculateAsync = (ms) => {
    
    return dispatch => {
        console.log('hei')
        
        dispatch(loading())
        delay(ms).then(() => {
            dispatch(loading())
            dispatch(reset())
        })
        
    }
}