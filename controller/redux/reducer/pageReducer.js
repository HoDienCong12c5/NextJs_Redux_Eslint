
import KEY, { initState } from "../constants"
import createReducer from "./reducerConfig"
export const getName = createReducer(initState.string,
  {
    [KEY.SET_NAME] (state, action) {
      return action.payload
    }
  }
)
