import { actionTypes } from './actionTypes'

export const addUser = (user) => ({
    type: actionTypes.ADD_USER,
    payload: user
})

export const removeUser = () => ({
    type: actionTypes.REMOVE_USER
})