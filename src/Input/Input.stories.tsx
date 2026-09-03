import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Check as CheckIcon, Search as SearchIcon } from 'lucide-react'

import Input from './Input'

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Input component for form input fields',
      },
    },
  },
  args: { inputId: 'test-input', label: 'Email', required: true, icon: <SearchIcon /> },
  argTypes: {
    label: {
      type: 'string',
    },
    hint: {
      type: 'string',
    },
    isError: {
      type: 'boolean',
    },
    errorMessage: {
      type: 'string',
    },
    inputId: {
      description: 'Used for `htmlFor` attribute on `label` element',
    },
    hintId: {
      description:
        'Set `id` attribute on hint element. Can be used to refer to hint element from the input element `aria-describedby` attribute',
    },
    errorId: {
      description:
        'Set `id` attribute on error element. Can be used to refer to error element from the input element `aria-errormessage` attribute',
    },
    placeholder: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
    type: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input placeholder="Enter email" {...args} />
}

export const Default = Template.bind({})

export const WithTrailingIcon = Template.bind({})
WithTrailingIcon.args = {
  trailingIcon: <CheckIcon aria-label="Valid input" />,
}
