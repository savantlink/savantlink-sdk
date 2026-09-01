import { useCallback, useEffect, useState } from 'react'

import { RefreshCw } from 'lucide-react'

import styles from './VersionUpdateNotice.module.scss'

import Button from '@/Button'
import Toast from '@/Toast'
import Typography from '@/Typography'

const DEFAULT_CHECK_INTERVAL_MS = 5 * 60 * 1000
const PERSISTENT_TOAST_TIMEOUT_MS = 2_147_483_647

interface VersionUpdateNoticeProps {
  currentBuildId: string
  versionUrl?: string
  storageKey?: string
  checkIntervalMs?: number
  enabled?: boolean
  title?: string
  description?: string
  updateLabel?: string
  onUpdate?: () => void
}

const VersionUpdateNotice = ({
  currentBuildId,
  versionUrl = '/version.json',
  storageKey = 'dismissed-app-build',
  checkIntervalMs = DEFAULT_CHECK_INTERVAL_MS,
  enabled = true,
  title = 'New version available',
  description = 'Update now to get the latest improvements.',
  updateLabel = 'Update now',
  onUpdate,
}: VersionUpdateNoticeProps) => {
  const [availableBuild, setAvailableBuild] = useState<string | null>(null)

  const check = useCallback(async () => {
    try {
      const url = new URL(versionUrl, window.location.href)
      url.searchParams.set('t', Date.now().toString())
      const response = await fetch(url.toString(), { cache: 'no-store' })
      if (!response.ok) return
      const release = (await response.json()) as { buildId?: string }
      if (
        release.buildId &&
        release.buildId !== currentBuildId &&
        sessionStorage.getItem(storageKey) !== release.buildId
      ) {
        setAvailableBuild(release.buildId)
      }
    } catch {
      // Version checks are best-effort and must never interrupt the app.
    }
  }, [currentBuildId, storageKey, versionUrl])

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return
    const onVisibilityChange = () => document.visibilityState === 'visible' && check()
    check()
    const interval = window.setInterval(check, checkIntervalMs)
    window.addEventListener('focus', check)
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      window.clearInterval(interval)
      window.removeEventListener('focus', check)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [check, checkIntervalMs, enabled])

  if (!availableBuild) return null

  const dismiss = () => {
    sessionStorage.setItem(storageKey, availableBuild)
    setAvailableBuild(null)
  }
  const update = () => {
    dismiss()
    if (onUpdate) onUpdate()
    else window.location.reload()
  }

  return (
    <Toast
      className={styles.toast}
      timeoutInterval={PERSISTENT_TOAST_TIMEOUT_MS}
      position="bottom-right"
      variant="success"
      icon={<RefreshCw size={20} />}
      message={
        <div className={styles.content}>
          <div>
            <Typography weight="bold">{title}</Typography>
            <Typography variant="small">{description}</Typography>
          </div>
          <div className={styles.actions}>
            <Button className={styles.updateButton} size="sm" onClick={update}>
              {updateLabel}
            </Button>
          </div>
        </div>
      }
      onClose={dismiss}
    />
  )
}

export default VersionUpdateNotice
export { DEFAULT_CHECK_INTERVAL_MS }
export type { VersionUpdateNoticeProps }
