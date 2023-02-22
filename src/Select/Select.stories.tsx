import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Select from './Select'

export default {
  title: 'Atoms/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />
}

export const Default = Template.bind({})

Default.args = {
  id: '1',
  name: '1',
  placeholder: 'Select a value',
  data: ['hello', 'world'],
  disabled: false
}
