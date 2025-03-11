import { useState } from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Table, { ColumnProps } from './Table'

export default {
  title: 'Organisms/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'This is a custom table component',
      },
    },
  },
} as ComponentMeta<typeof Table>
interface User {
  id: number
  name: string
  userId: string
  email: string
  role: string
}

const Template: ComponentStory<typeof Table> = () => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null)

  const columns: ColumnProps<User>[] = [
    { key: 'id', header: 'S/N', sortable: true },
    { key: 'name', header: 'Name', sortable: true },
    { key: 'userId', header: 'User Id', sortable: true },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role', sortable: true },
    {
      key: 'actions',
      header: 'Actions',
      render: (user: { name: string }) => <button onClick={() => alert(`Edit ${user.name}`)}>Edit</button>,
    },
  ]

  const data: User[] = [
    { id: 1, userId: "john", name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, userId: "jane", name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, userId: "alice", name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
    { id: 4, userId: "fuller", name: 'John Fuller', email: 'john@example.com', role: 'Admin' },
    { id: 5, userId: "sarah", name: 'Sarah Smith', email: 'jane@example.com', role: 'User' },
    { id: 6, userId: "johnson", name: 'Sarkl Johnson', email: 'alice@example.com', role: 'User' },
  ]

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig?.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const sortedData = sortConfig
    ? [...data].sort((a, b) => {
        const aValue = a[sortConfig.key as keyof User]
        const bValue = b[sortConfig.key as keyof User]
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
        return 0
      })
    : data
  return <Table columns={columns} data={sortedData} sortConfig={sortConfig || undefined} onSort={handleSort} />
}

export const Default = Template.bind({})
