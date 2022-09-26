import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from 'controller/redux/store'
import App from 'next/app'
import React from 'react'
import BaseContainer from 'pages/Container'
import HomePage from 'pages/Screen/HomeScreen'
import { NextSeo } from 'next-seo';
class XCreation extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <BaseContainer >
        <NextSeo
      title="Mlem Coffee"
      description="Cung cấp cà phê tốt nhất cho bạn."
    />
          <Component {...pageProps} />
          {/* <HomePage /> */}

          {/* <HomePage /> */}
        </BaseContainer>
      </Provider>
    )
  }
}

export default XCreation
