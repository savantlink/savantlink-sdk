import { useEffect, useState } from 'react'

const SCREEN_SIZE_BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
} as const

interface ScreenSize {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

const getScreenSize = (width?: number): ScreenSize => {
  if (width === undefined) return { isMobile: false, isTablet: false, isDesktop: true }
  return {
    isMobile: width < SCREEN_SIZE_BREAKPOINTS.tablet,
    isTablet: width >= SCREEN_SIZE_BREAKPOINTS.tablet && width < SCREEN_SIZE_BREAKPOINTS.desktop,
    isDesktop: width >= SCREEN_SIZE_BREAKPOINTS.desktop,
  }
}

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(() => getScreenSize())

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize(window.innerWidth))

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}

export default useScreenSize
export { SCREEN_SIZE_BREAKPOINTS }
export type { ScreenSize }
