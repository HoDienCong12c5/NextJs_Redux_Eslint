import * as pageReducers from "./pageReducer"

import { combineReducers } from "redux"

const rootReducer = combineReducers({
  ...pageReducers
})

export default rootReducer
