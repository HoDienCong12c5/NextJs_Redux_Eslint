import storeRedux from 'controller/redux/store'
import PageAction from 'controller/redux/action/pageAction'
export default class ReduxServices {
  static async callDispatchAction (action) {
    storeRedux.dispatch(action)
  }

  static async setName (name) {
    ReduxServices.callDispatchAction(PageAction.setName(name))
  }
}
