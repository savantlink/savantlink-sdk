/* eslint-disable no-console */
import { useState } from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Table, { ColumnProps } from './Table'
import Button from '../Button' // Assuming you have a Button component

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
  age: number
  accountNumber: number
}
const emptyState = {
  title: 'No Data Available',
  descrption: 'There is no data to display. Please add some data or check back later.',
  cTA: <Button onClick={() => console.log('Add Data clicked')}>Add Data</Button>,
}

const Template: ComponentStory<typeof Table> = (args) => {
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
    {
      id: 1,
      userId: 'john',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      age: 70,
      accountNumber: 2978639873,
    },
    {
      id: 2,
      userId: 'jane',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      age: 70,
      accountNumber: 2978639873,
    },
    {
      id: 3,
      userId: 'alice',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'User',
      age: 70,
      accountNumber: 2978639873,
    },
    {
      id: 4,
      userId: 'fuller',
      name: 'John Fuller',
      email: 'john@example.com',
      role: 'Admin',
      age: 70,
      accountNumber: 2978639873,
    },
    {
      id: 5,
      userId: 'sarah',
      name: 'Sarah Smith',
      email: 'jane@example.com',
      role: 'User',
      age: 70,
      accountNumber: 2978639873,
    },
    {
      id: 6,
      userId: 'johnson',
      name: 'Sarkl Johnson',
      email: 'alice@example.com',
      role: 'User',
      age: 70,
      accountNumber: 2978639873,
    },
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

  return (
    <Table
      columns={columns}
      data={sortedData}
      sortConfig={sortConfig || undefined}
      onSort={handleSort}
      emptyState={emptyState}
      {...args}
    />
  )
}

export const Default = Template.bind({})

export const StickyFirstColumn = Template.bind({})
StickyFirstColumn.args = {
  stickyFirstColumn: true,
}

// New story for empty state
export const EmptyState = () => {
  const columns: ColumnProps<User>[] = [
    { key: 'id', header: 'S/N', sortable: true },
    { key: 'name', header: 'Name', sortable: true },
    { key: 'userId', header: 'User Id', sortable: true },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role', sortable: true },
    {
      key: 'actions',
      header: 'Actions',
      render: (user: { name: string }) => <button onClick={() => console.log(`Edit ${user.name}`)}>Edit</button>,
    },
  ]

  const data: User[] = [] // Empty data array

  return <Table columns={columns} data={data} emptyState={emptyState} />
}

interface InventoryRecord {
  dateTime: string
  productName: string
  orderId: string
  stockType: string
  quantity: number
  sellingPrice: string
  totalAmount: string
  store: string
  referenceStore: string
  initiator: string
}

export const HorizontalPaging = () => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null)

  const columns: ColumnProps<InventoryRecord>[] = [
    { key: 'dateTime', header: 'Date/Time' },
    { key: 'productName', header: 'Product Name' },
    { key: 'orderId', header: 'Order Id' },
    { key: 'stockType', header: 'Stock Type' },
    { key: 'quantity', header: 'Quantity' },
    { key: 'sellingPrice', header: 'Selling Price' },
    { key: 'totalAmount', header: 'Total Amount' },
    { key: 'store', header: 'Store' },
    { key: 'referenceStore', header: 'Reference Store' },
    { key: 'initiator', header: 'Initiator' },
    {
      key: 'action',
      header: 'Action',
      render: (row: InventoryRecord) => <button onClick={() => alert(`View ${row.productName}`)}>View Details</button>,
    },
  ]

  const data: InventoryRecord[] = Array.from({ length: 7 }).map((_, i) => ({
    dateTime: `12 Dec, 2024, 5:07:0${i} AM`,
    productName: ['Coca-Cola', 'Eggs', 'Sugar', 'Peak Milk', 'Indomie', "Alba's Corn Flakes", 'Milo'][i],
    orderId: '001284567',
    stockType: i % 2 === 0 ? 'Sold' : 'Stock-In',
    quantity: 45,
    sellingPrice: '950.00',
    totalAmount: 'NGN 42,750.00',
    store: i % 2 === 0 ? 'Ketu Branch' : 'Ikeja Branch',
    referenceStore: i % 3 === 0 ? 'Hazel Store' : 'Central Store',
    initiator: i % 2 === 0 ? 'Eni Mark' : 'James M.',
  }))

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig?.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const sortedData = sortConfig
    ? [...data].sort((a: InventoryRecord, b: InventoryRecord) => {
        const aValue = a[sortConfig.key as keyof InventoryRecord]
        const bValue = b[sortConfig.key as keyof InventoryRecord]
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
        return 0
      })
    : data

  return (
    <Table
      columns={columns}
      data={sortedData}
      sortConfig={sortConfig || undefined}
      onSort={handleSort}
      emptyState={emptyState}
      visibleColumns={6}
    />
  )
}

export const BulkSelection = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Array<string | number>>([])
  const products = [
    { id: 1, name: 'Classic T-Shirt', status: 'Published' },
    { id: 2, name: 'Running Shoes', status: 'Published' },
    { id: 3, name: 'Travel Backpack', status: 'Unpublished' },
  ]

  return (
    <Table
      columns={[{ key: 'name', header: 'Product' }, { key: 'status', header: 'Status' }]}
      data={products}
      emptyState={{}}
      stickyFirstColumn
      rowSelection={{
        getRowKey: (product) => product.id,
        getRowLabel: (product) => product.name,
        selectedRowKeys,
        onChange: setSelectedRowKeys,
        renderActions: (keys) => (
          <>
            <Button disabled={!keys.length} onClick={() => alert(`Publish: ${keys.join(', ')}`)}>Publish</Button>
            <Button disabled={!keys.length} onClick={() => alert(`Unpublish: ${keys.join(', ')}`)}>Unpublish</Button>
            <Button disabled={!keys.length} onClick={() => alert(`Delete: ${keys.join(', ')}`)}>Delete</Button>
          </>
        ),
      }}
    />
  )
}
