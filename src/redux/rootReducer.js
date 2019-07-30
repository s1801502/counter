import { combineReducers } from 'redux'
import counterReducer from './counter/counterReducer'
import userReducer from './user/userReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter', 'user']
}

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

export default persistReducer(persistConfig, rootReducer)