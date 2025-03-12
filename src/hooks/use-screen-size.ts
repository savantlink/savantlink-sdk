import { useEffect, useState } from 'react'

import { BREAKPOINTS, isClient } from '@/services/dom'

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: isClient() ? window.innerWidth : 0,
    height: isClient() ? window.innerHeight : 0,
  })

  useEffect(() => {
    if (!isClient()) return

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const isSmallScreen = screenSize.width < BREAKPOINTS.lg
  const isMobileScreen = screenSize.width < BREAKPOINTS.md

  return { screenSize, isSmallScreen, isMobileScreen }
}

export default useScreenSize
