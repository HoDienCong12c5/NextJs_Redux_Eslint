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
        <NextSeo
          title="Mlem Coffee"
          titleTemplate="Mlem Coffee"
          defaultTitle="Mlem Coffee"
          description="Mlem coffee cung cấp cà phê tốt nhất cho bạn từ tỉnh Gia lai."
          canonical="https://www.avneesh.tech/"
          openGraph={{
            url: 'https://www.avneesh.tech/',
            title: 'Mlem Coffee',
            description: 'Mlem coffee cung cấp cà phê tốt nhất cho bạn từ tỉnh Gia lai.',
            images: [
              {
                url: 'public/Assets/Image/Home/logo.jpg',
                width: 800,
                height: 420,
                alt: 'Mlem Coffee',
              },
            ],
          }}
          twitter={{
            handle: '@mlemcoffee',
            site: '@mlemcoffee',
            cardType: 'summary_large_image',
          }}
          facebook={{
            appId: '100080400793331',
          }}
        />
        <BaseContainer >


          <Component {...pageProps} />
          {/* <HomePage /> */}

          {/* <HomePage /> */}
        </BaseContainer>
      </Provider>
    )
  }
}
XCreation.getInitialProps = async ({ query }) => {
  return {}
}
export default XCreation
