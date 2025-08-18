import { ComponentMeta, ComponentStory } from '@storybook/react'

import Dropdown from './Dropdown'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  argTypes: {
    onChange: { action: 'changed' }, // logs changes in the Actions panel
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  control: <button>Click Me!</button>,
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
}

export const PreSelected = Template.bind({})
PreSelected.args = {
  control: <button>Click Me!</button>,
  options: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ],
}
// 👆 To pre-select, you can wrap Dropdown in a controlled version (or adjust component to accept `value`)

export const CustomPlaceholder = Template.bind({})
CustomPlaceholder.args = {
  control: <button>Click Me!</button>,
  options: [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ],
}

export const ManyOptions = Template.bind({})
ManyOptions.args = {
  control: <button>Click Me!</button>,
  options: Array.from({ length: 20 }, (_, i) => ({
    label: `Item ${i + 1}`,
    value: i + 1,
  })),
}
