import { useState } from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Select, { SelectOptions } from './Select'

export default {
  title: 'Molecules/Select',
  component: Select,
  argTypes: {
    options: { control: 'object' },
    placeholder: { control: 'text' },
    multiple: { control: 'boolean' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = () => {
  const [selectedValue, setSelectedValue] = useState<SelectOptions>()
  const handleChange = (value: SelectOptions) => {
    setSelectedValue(value)
  }

  return (
    <>
      <Select
        label="Select Option"
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
          { label: 'Option 4', value: 'option4' },
          { label: 'Option 5', value: 'option5' },
          { label: 'Option 6', value: 'option6' },
          { label: 'Option 7', value: 'option7' },
          { label: 'Option 8', value: 'option8' },
          { label: 'Option 9', value: 'option9' },
        ]}
        placeholder="Select an option"
        onChange={handleChange}
        value={selectedValue}
        isError={true}
        errorMessage='Required'
        required
      />
    </>
  )
}

export const SingleSelect = Template.bind({})

export const MultipleSelect: ComponentStory<typeof Select> = () => {
  const [selectedValue, setSelectedValue] = useState<SelectOptions>(null)
  const handleChange = (value: SelectOptions) => {
    setSelectedValue(value)
  }

  return (
    <>
      <Select
        label="Select Option"
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
          { label: 'Option 4', value: 'option4' },
          { label: 'Option 5', value: 'option5' },
          { label: 'Option 6', value: 'option6' },
          { label: 'Option 7', value: 'option7' },
          { label: 'Option 8', value: 'option8' },
          { label: 'Option 9', value: 'option9' },
          { label: 'Option 10', value: 'option10' },
        ]}
        placeholder="Select an option"
        multiple={true}
        onChange={handleChange}
        value={selectedValue}
        required
      />
    </>
  )
}
