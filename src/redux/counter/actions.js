import { actionTypes } from './actionTypes'


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

export const set = number => ({
    type: actionTypes.SET,
    number
})

export const fetchAsync = () => {
    
    return dispatch => {
        dispatch(loading())
        fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8')
        .then(res => res.json())
        .then(res => {
            dispatch(loading())
            dispatch(set(res.data[0]))
        })
        
    }
}