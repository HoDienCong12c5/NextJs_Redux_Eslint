import storeRedux from 'controller/redux/store'
import PageAction from 'controller/redux/action/pageAction'
export default class ReduxServices {
  static async callDispatchAction ( action ) {
    storeRedux.dispatch( action )
  }

  static async setName ( name ) {
    ReduxServices.callDispatchAction( PageAction.setName( name ) )
  }

  static setPrivateKey ( key ) {
    ReduxServices.callDispatchAction( PageAction.setPrivateKey( key ) )
  }

  static getPrivateKey ( ) {
    const { getPrivateKey } = storeRedux.getState()
    return getPrivateKey
  }
}
