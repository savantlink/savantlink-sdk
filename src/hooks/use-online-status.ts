import { useEffect, useState } from 'react'

const getOnlineStatus = () => (typeof navigator === 'undefined' ? true : navigator.onLine)

const useOnlineStatus = (): boolean => {
  const [isOnline, setIsOnline] = useState(getOnlineStatus)

  useEffect(() => {
    const online = () => setIsOnline(true)
    const offline = () => setIsOnline(false)
    window.addEventListener('online', online)
    window.addEventListener('offline', offline)
    return () => {
      window.removeEventListener('online', online)
      window.removeEventListener('offline', offline)
    }
  }, [])

  return isOnline
}

export { useOnlineStatus }
