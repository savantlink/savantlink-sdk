import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import NumberKeypad from './NumberKeypad'

export default {
  title: 'Molecules/NumberKeypad',
  component: NumberKeypad,
  parameters: {
    docs: {
      description: {
        component: 'NumberKeypad component for value input',
      },
    },
  },
  args: {},
  argTypes: {},
} as ComponentMeta<typeof NumberKeypad>

const Template: ComponentStory<typeof NumberKeypad> = (args) => {
  return <NumberKeypad {...args} />
}

export const Default = Template.bind({})
