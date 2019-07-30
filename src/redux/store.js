import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootSaga from './counter/sagas'
import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, logger, thunk]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)