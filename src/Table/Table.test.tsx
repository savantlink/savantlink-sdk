import { useState } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Table, { TableRowKey } from './Table'

const data = [{ id: 1, name: 'Shirt' }, { id: 2, name: 'Shoes' }, { id: 3, name: 'Locked' }]
const columns = [{ key: 'name', header: 'Product' }]

const SelectableTable = ({ onRowClick = jest.fn() }: { onRowClick?: (row: typeof data[number]) => void }) => {
  const [keys, setKeys] = useState<TableRowKey[]>([99])
  return <Table columns={columns} data={data} emptyState={{}} onRowClick={onRowClick} rowSelection={{
    getRowKey: (row) => row.id,
    getRowLabel: (row) => row.name,
    selectedRowKeys: keys,
    onChange: setKeys,
    isRowSelectable: (row) => row.id !== 3,
    renderActions: (selected) => <span data-testid="keys">{selected.join(',')}</span>,
  }} />
}

test('select-all skips disabled rows and preserves keys from other pages', () => {
  render(<SelectableTable />)
  fireEvent.click(screen.getAllByLabelText('Select all rows on this page')[0])
  expect(screen.getByLabelText('Select Shirt')).toBeChecked()
  expect(screen.getByLabelText('Select Shoes')).toBeChecked()
  expect(screen.getByLabelText('Select Locked')).toBeDisabled()
  expect(screen.getByLabelText('Select Locked')).not.toBeChecked()
  expect(screen.getByTestId('keys')).toHaveTextContent('99,1,2')
  fireEvent.click(screen.getAllByLabelText('Select all rows on this page')[1])
  expect(screen.getByTestId('keys')).toHaveTextContent(/^99$/)
})

test('partial selection is mixed and checkbox interaction does not activate the row', () => {
  const onRowClick = jest.fn()
  render(<SelectableTable onRowClick={onRowClick} />)
  fireEvent.click(screen.getByLabelText('Select Shirt'))
  screen.getAllByLabelText('Select all rows on this page').forEach((input) => {
    expect((input as HTMLInputElement).indeterminate).toBe(true)
  })
  fireEvent.keyDown(screen.getByLabelText('Select Shirt'), { key: ' ' })
  expect(onRowClick).not.toHaveBeenCalled()
  fireEvent.click(screen.getByText('Shirt'))
  expect(onRowClick).toHaveBeenCalledWith(data[0])
})

test('selection follows stable keys when rows are reordered', () => {
  const props = { columns, emptyState: {}, rowSelection: {
    getRowKey: (row: typeof data[number]) => row.id,
    getRowLabel: (row: typeof data[number]) => row.name,
    selectedRowKeys: [1], onChange: jest.fn(),
  } }
  const { rerender } = render(<Table {...props} data={data} />)
  rerender(<Table {...props} data={[...data].reverse()} />)
  expect(screen.getByLabelText('Select Shirt')).toBeChecked()
  expect(screen.getByLabelText('Select Shoes')).not.toBeChecked()
})

test('selection remains opt-in', () => {
  render(<Table columns={columns} data={data} emptyState={{}} />)
  expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()
})
