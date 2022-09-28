import '../styles/globals.css'
import '../styles/override.mudule.scss'
import { Provider } from 'react-redux'
import store from 'controller/redux/store'
import App from 'next/app'
import React from 'react'
import BaseContainer from 'pages/Container'
import images from 'common/images'
import { NextSeo, DefaultSeo  } from 'next-seo';
import Seo from './seoConfig'
class XCreation extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <BaseContainer >
        <DefaultSeo {...Seo}/>
          <NextSeo
            title="Mlem Coffee"
            titleTemplate="Mlem Coffee"
            defaultTitle="Mlem Coffee"
            description="Mlem cung cấp cà phê tốt nhất cho bạn."
            canonical="https://www.avneesh.tech/"
            openGraph={{
              url: "https://www.avneesh.tech/",
              title: "Mlem Coffee",
              description: "Mlem cung cấp cà phê tốt nhất cho bạn.",
              images: [
                {
                  url: 'public/Assets/Image/Home/logo.jpg',
                  width: 800,
                  height: 420,
                  alt: "Mlem Coffee",
                },
              ],
            }}
            twitter={{
              handle: "@mlemcoffee",
              site: "@mlemcoffee",
              cardType: "summary_large_image",
            }}
            facebook={{
              appId: '100080400793331',
            }}
          />
          <Component {...pageProps} />
          {/* <HomePage /> */}

          {/* <HomePage /> */}
        </BaseContainer>
      </Provider>
    )
  }
}
XCreation.getInitialProps = async ({ query }) => {
  return { }
}
export default XCreation
