import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from 'controller/redux/store'
import App from 'next/app'
class XCreation extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default XCreation
