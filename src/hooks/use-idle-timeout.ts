import { useEffect, useRef } from 'react'

const DEFAULT_IDLE_TIMEOUT_MS = 60 * 60 * 1000
const DEFAULT_ACTIVITY_EVENTS = ['keydown', 'mousemove', 'pointerdown', 'scroll', 'touchstart'] as const

interface UseIdleTimeoutOptions {
  onIdle: () => void
  enabled?: boolean
  timeoutMs?: number
}

const useIdleTimeout = ({ onIdle, enabled = true, timeoutMs = DEFAULT_IDLE_TIMEOUT_MS }: UseIdleTimeoutOptions) => {
  const onIdleRef = useRef(onIdle)

  useEffect(() => {
    onIdleRef.current = onIdle
  }, [onIdle])

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    let timeout: number
    let lastActivity = Date.now()

    const schedule = () => {
      window.clearTimeout(timeout)
      const remaining = timeoutMs - (Date.now() - lastActivity)
      timeout = window.setTimeout(() => {
        if (Date.now() - lastActivity >= timeoutMs) onIdleRef.current()
        else schedule()
      }, Math.max(0, remaining))
    }
    const recordActivity = () => {
      if (Date.now() - lastActivity < 1000) return
      lastActivity = Date.now()
      schedule()
    }
    const checkElapsedTime = () => {
      if (document.visibilityState === 'visible' && Date.now() - lastActivity >= timeoutMs) onIdleRef.current()
    }

    DEFAULT_ACTIVITY_EVENTS.forEach((event) => window.addEventListener(event, recordActivity, { passive: true }))
    document.addEventListener('visibilitychange', checkElapsedTime)
    schedule()

    return () => {
      window.clearTimeout(timeout)
      DEFAULT_ACTIVITY_EVENTS.forEach((event) => window.removeEventListener(event, recordActivity))
      document.removeEventListener('visibilitychange', checkElapsedTime)
    }
  }, [enabled, timeoutMs])
}

const useInactivityLogout = (options: UseIdleTimeoutOptions) => useIdleTimeout(options)

export { DEFAULT_IDLE_TIMEOUT_MS, useIdleTimeout, useInactivityLogout }
export type { UseIdleTimeoutOptions }
