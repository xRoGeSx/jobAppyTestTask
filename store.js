import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import rootReducer from "./reducers/index"

//const middleware = () => applyMiddleware(promise(), thunk, logger)

const configureStore = () => {
   return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;