import React, { useEffect, useState } from 'react'

import fallbackImgSrc from '../../assets/images/img_placeholder.png'

interface ImageLoaderProps {
  src: string
  alt: string
  className?: string
  width?: number | string
  height?: number | string
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, className, width, height }) => {
  const [imageSrc, setImageSrc] = useState<string>(fallbackImgSrc)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const img = new Image()
    img.src = src

    img.onload = () => {
      setImageSrc(src)
      setIsLoading(false)
    }

    img.onerror = () => {
      setImageSrc(fallbackImgSrc)
      setIsLoading(false)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className || ''} ${isLoading ? 'opacity-50' : 'opacity-100'}`}
      width={width}
      height={height}
      style={{ transition: 'opacity 0.3s ease-in-out' }}
    />
  )
}

export default ImageLoader
