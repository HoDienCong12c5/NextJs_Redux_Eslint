import '../styles/globals.css'
import '../styles/override.mudule.scss'
import { Provider } from 'react-redux'
import store from 'controller/redux/store'
import App from 'next/app'
import React from 'react'
import BaseContainer from 'pages/Container'
import images from 'common/images'
import { NextSeo, DefaultSeo } from 'next-seo';
import Seo from './seoConfig'
import Head from 'next/head'

class XCreation extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Head >
          <title>Mlem Coffee</title>
          <meta charSet='utf-8' />
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <link rel='manifest' href='/static/manifest.json' />
          <link rel='manifest' href='/static/site.webmanifest' />
          <link rel='apple-touch-icon' href='/static/apple-touch-icon.png' />
          <meta httpEquiv='Cache-Control' content='no-cache, no-store, must-revalidate' />
          <meta httpEquiv='Pragma' content='no-cache' />
          <meta httpEquiv='Expires' content='0' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no' />
          <meta name='theme-color' content='#000000' />
          <DefaultSeo {...Seo} />
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
        </Head>
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
