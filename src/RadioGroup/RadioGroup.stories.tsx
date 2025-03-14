import { ComponentMeta, ComponentStory } from '@storybook/react'

import RadioGroup from './RadioGroup'

export default {
  title: 'Molecules/RadioGroup',
  component: RadioGroup,
  argTypes: {
    title: { control: 'text' },
    options: { control: 'object' },
    defaultValue: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Select option',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  defaultValue: 'option1',
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  title: 'Select option',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  defaultValue: 'option1',
  disabled: true,
}
