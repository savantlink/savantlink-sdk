import { ComponentMeta, ComponentStory } from '@storybook/react'

import Keypad from './Keypad'

export default {
  title: 'Molecules/Keypad',
  component: Keypad,
  parameters: {
    docs: {
      description: {
        component: 'Keypad component for value input',
      },
    },
  },
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Keypad>

const Template: ComponentStory<typeof Keypad> = (args) => {
  return <Keypad {...args} />
}

export const Default = Template.bind({})
