import { useEffect, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

import { clsx } from 'clsx'

import styles from './ImageLoader.module.scss'

interface ImageLoaderProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string
  fallbackSrc?: string
}

const ImageLoader = ({ src, fallbackSrc, className, onLoad, onError, ...props }: ImageLoaderProps) => {
  const [imageSrc, setImageSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setImageSrc(src)
    setIsLoading(true)
  }, [src])

  return (
    <img
      {...props}
      src={imageSrc}
      className={clsx(styles.image, isLoading ? styles.loading : styles.loaded, className)}
      onLoad={(event) => {
        setIsLoading(false)
        onLoad?.(event)
      }}
      onError={(event) => {
        setIsLoading(false)
        if (fallbackSrc && imageSrc !== fallbackSrc) setImageSrc(fallbackSrc)
        onError?.(event)
      }}
    />
  )
}

export default ImageLoader
export type { ImageLoaderProps }
