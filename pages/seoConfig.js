import React from 'react'
import Head from 'next/head'
import { NextSeo, DefaultSeo } from 'next-seo'
const HeadSeo = () => {
  return (
    <Head >
      <link rel="shortcut icon" href="/Assets/Image/Home/logo.jpg" />
      {/* <title>Mlem Coffee</title>
      <meta charSet='utf-8' />
      <meta name="description" content={'Mlem coffee cung cấp cà phê tốt nhất cho bạn từ tỉnh Gia lai.'} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property="og:title" content={"Mlem Coffee"} key="ogtitle" />
      <meta property="og:description" content={'Mlem coffee cung cấp cà phê tốt nhất cho bạn từ tỉnh Gia lai.'} key="ogdec" /> */}
      <NextSeo
        title="Mlem Coffee"
        titleTemplate="Mlem Coffee"
        defaultTitle="Mlem Coffee"
        description="Mlem coffee cung cấp cà phê tốt nhất cho bạn từ tỉnh Gia lai."
        canonical="https://malemcoffee.com/"
        openGraph={{
          url: 'https://malemcoffee.com/',
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
    </Head>
  )
}
HeadSeo.getInitialProps = async ({ query }) => {
  return {}
}
export default HeadSeo