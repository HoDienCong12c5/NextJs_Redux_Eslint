import KEY, { initState } from "../constants"
export default class ActionPage {
  static setName (payload) {
    return {
      type: KEY.SET_NAME,
      payload
    }
  }
}
