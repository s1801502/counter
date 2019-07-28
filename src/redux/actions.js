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

export const calculateAsync = () => {
    
    return dispatch => {
        console.log('hei')
        
        dispatch(loading())
        delay(2000).then(() => {
            dispatch(loading())
            dispatch(reset())
        })
        
    }
}