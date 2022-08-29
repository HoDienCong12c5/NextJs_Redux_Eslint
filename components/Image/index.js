import React from 'react'
import Image from 'next/image'
const ImageBase = ({src, alt='Picture of the author',quality=50, width=50, height=50,...props }) => {
  return (
    <Image
    // loader={imgLoading}
      src={src}
      alt={alt}
      quality={quality}
      width={width}
      height={height}
      {...props}
    />
  )
}
export default ImageBase
