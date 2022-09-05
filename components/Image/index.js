import React from 'react'
import Image from 'next/image'
const ImageBase = ({
  src,
  alt = 'Picture of the author',
  quality = 50,
  width = 50,
  height = 50,
  fullSize = false,

  ...props
}) => {
  return (
    <Image
      // loader={imgLoading}
      src={src}
      alt={alt}
      quality={quality}
      width={width}
      height={height}
      {...props}
      sizes={`${fullSize ? 'min-width: 100%' : ''}`}
    />
    // <div>sdfghsd
    //   <img src={src}/>
    // </div>
  )
}
export default ImageBase
