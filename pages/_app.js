import '../styles/globals.css'
import '../styles/override.mudule.scss'
import { Provider } from 'react-redux'
import store from 'controller/redux/store'
import App from 'next/app'
import React from 'react'
import BaseContainer from 'pages/Container'
import images from 'common/images'
import { NextSeo, DefaultSeo } from 'next-seo'
import HeadSeo from './seoConfig'

class XCreation extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <HeadSeo />

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <BaseContainer >


          <Component {...pageProps} />
          {/* <HomePage /> */}

          {/* <HomePage /> */}
        </BaseContainer>
      </Provider>
    )
  }
}

export default XCreation
