import { applyMiddleware, createStore, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducer/index"
const middleWare = [thunkMiddleware]
const window = require("global/window")

// user redux tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(rootReducer, applyMiddleware(...middleWare))
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleWare)))

export default store
