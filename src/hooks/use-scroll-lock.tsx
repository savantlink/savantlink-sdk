import { useEffect } from 'react'

const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add('scrollLock')
    } else {
      document.body.classList.remove('scrollLock')
    }

    return () => {
      document.body.classList.remove('scrollLock')
    }
  }, [isLocked])
}

export default useScrollLock
