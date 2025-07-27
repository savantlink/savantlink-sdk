import React, { createContext, useContext, useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom' // Import for query params

import styles from './Tabs.module.scss'

interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  disabled?: boolean
}

interface TabsProps {
  tabs: TabItem[]
  defaultActiveTab?: string
  variant?: 'primary' | 'secondary'
  onTabChange?: (tabId: string) => void
}

const TabContext =
  createContext<{
    changeTab: (tabId: string) => void
  } | null>(null)

export const useTabs = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('useTabs must be used within a Tabs component')
  }
  return context
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveTab, variant = 'primary', onTabChange }) => {
  const [searchParams, setSearchParams] = useSearchParams() // Hook to read/update query params
  const activeTabFromQuery = searchParams.get('activeTab') // Get activeTab from URL
  const initialTab =
    activeTabFromQuery && tabs.some((tab) => tab.id === activeTabFromQuery)
      ? activeTabFromQuery // Use query param if valid
      : defaultActiveTab || tabs[0]?.id // Fallback to default or first tab
  const [activeTab, setActiveTab] = useState(initialTab)

  // Sync activeTab with query params when they change
  useEffect(() => {
    if (activeTabFromQuery && tabs.some((tab) => tab.id === activeTabFromQuery) && activeTabFromQuery !== activeTab) {
      setActiveTab(activeTabFromQuery)
    }
  }, [activeTabFromQuery, tabs, activeTab])

  const handleTabClick = (tabId: string) => {
    if (tabs.find((tab) => tab.id === tabId)?.disabled) return

    setActiveTab(tabId)
    // Update URL query param
    setSearchParams({ activeTab: tabId })
    onTabChange?.(tabId)
  }

  return (
    <TabContext.Provider value={{ changeTab: handleTabClick }}>
      <div className={`${styles.tabsContainer} ${styles[variant]}`}>
        <div className={styles.tabsHeader}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''} ${
                tab.disabled ? styles.disabled : ''
              }`}
              onClick={() => handleTabClick(tab.id)}
              disabled={tab.disabled}
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          className={styles.tabContent}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          id={`tabpanel-${activeTab}`}
        >
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </TabContext.Provider>
  )
}

export default Tabs
export type { TabItem, TabsProps }
