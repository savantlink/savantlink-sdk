import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import { clsx } from 'clsx'

import styles from './Tabs.module.scss'

interface TabItem {
  id: string
  label: ReactNode
  content: ReactNode
  disabled?: boolean
}

interface TabsProps {
  tabs: TabItem[]
  value?: string
  defaultValue?: string
  className?: string
  variant?: 'primary' | 'secondary'
  onChange?: (tabId: string) => void
}

const TabContext = createContext<{ changeTab: (tabId: string) => void } | null>(null)

const useTabs = () => {
  const context = useContext(TabContext)
  if (!context) throw new Error('useTabs must be used within Tabs')
  return context
}

const Tabs = ({ tabs, value, defaultValue, className, variant = 'primary', onChange }: TabsProps) => {
  const fallbackTab = tabs.find((tab) => !tab.disabled)?.id
  const [internalValue, setInternalValue] = useState(defaultValue ?? fallbackTab)
  const activeTab = value ?? internalValue

  useEffect(() => {
    if (!tabs.some((tab) => tab.id === activeTab && !tab.disabled)) setInternalValue(fallbackTab)
  }, [activeTab, fallbackTab, tabs])

  const changeTab = (tabId: string) => {
    if (tabs.find((tab) => tab.id === tabId)?.disabled) return
    if (value === undefined) setInternalValue(tabId)
    onChange?.(tabId)
  }

  const selectedTab = tabs.find((tab) => tab.id === activeTab)

  return (
    <TabContext.Provider value={{ changeTab }}>
      <div className={clsx(styles.container, styles[variant], className)}>
        <div className={styles.list} role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-controls={`tabpanel-${tab.id}`}
              aria-selected={activeTab === tab.id}
              disabled={tab.disabled}
              className={clsx(styles.tab, activeTab === tab.id && styles.active)}
              onClick={() => changeTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {selectedTab && (
          <div
            role="tabpanel"
            id={`tabpanel-${selectedTab.id}`}
            aria-labelledby={`tab-${selectedTab.id}`}
            className={styles.panel}
          >
            {selectedTab.content}
          </div>
        )}
      </div>
    </TabContext.Provider>
  )
}

export default Tabs
export { useTabs }
export type { TabItem, TabsProps }
