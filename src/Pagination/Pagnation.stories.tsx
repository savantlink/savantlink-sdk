import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Pagination from './Pagination'

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => {
  return <Pagination {...args} />
}

export const Default = Template.bind({})

Default.args = {
  totalSize: 100,
  perPageSize: 10,
  currentPageSiblings: 2,
  currentPage: 1,
  onPageChange: () => {
    return true
  },
}
