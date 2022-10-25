import React from 'react'
import Head from 'next/head'
import { NextSeo, DefaultSeo } from 'next-seo'
const HeadSeo = () => {
  return (
    <Head >
      <link rel="shortcut icon" href="/Assets/Image/Home/logo.jpg" />
      {/* <!-- HTML Meta Tags --> */}
      <title>Mlem Coffee</title>
      <meta name="description" content="Mlem coffee cung cấp cà phê tốt nhất cho bạn từ tỉnh Gia lai."/>

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content="Mlem Coffee"/>
      <meta itemProp="description" content="Mlem coffee cung cấp cà phê tốt nhất cho bạn từ tỉnh Gia lai."/>
      <meta itemProp="image" content="public/Assets/Image/Home/logo.jpg"/>

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://mlemcoffee.vercel.app/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Mlem Coffee"/>
      <meta property="og:description" content="Mlem coffee cung cấp cà phê tốt nhất cho bạn từ tỉnh Gia lai."/>
      <meta property="og:image" content="public/Assets/Image/Home/logo.jpg"/>

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Mlem Coffee"/>
      <meta name="twitter:description" content="Mlem coffee cung cấp cà phê tốt nhất cho bạn từ tỉnh Gia lai."/>
      <meta name="twitter:image" content="public/Assets/Image/Home/logo.jpg"/>
    </Head>
  )
}

export async function getServerSideProps ( { params, res } ) {
  return {}
}

export default HeadSeo