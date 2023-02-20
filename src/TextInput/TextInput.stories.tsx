import { ComponentMeta, ComponentStory } from '@storybook/react'

import TextInput from './TextInput'

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: 'Input component for form input fields',
      },
    },
  },
  args: {},
  argTypes: {
    label: {
      type: 'string',
    },
    hint: {
      type: 'string',
    },
    error: {
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
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => {
  return <TextInput {...args} />
}

export const Default = Template.bind({})
