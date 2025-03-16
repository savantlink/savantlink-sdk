import { ComponentMeta, ComponentStory } from '@storybook/react'

import Tooltip from './Tooltip'

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'A customizable tooltip component with position and background variants.',
      },
    },
  },
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
      },
      defaultValue: 'top',
      description: 'Position of the tooltip relative to the trigger element.',
    },
    variant: {
      control: {
        type: 'select',
        options: ['dark', 'light', 'success', 'info', 'warning', 'danger'],
      },
      defaultValue: 'dark',
      description: 'Background variant of the tooltip.',
    },
    text: {
      control: 'text',
      defaultValue: 'This is a tooltip',
      description: 'Text displayed inside the tooltip.',
    },
  },
} as ComponentMeta<typeof Tooltip>

// Template for the Tooltip story
const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{ margin: '50px', display: 'flex', justifyContent: 'center' }}>
    <Tooltip {...args}>
      <button>Hover me</button>
    </Tooltip>
  </div>
)

// Default Tooltip story
export const Default = Template.bind({})
Default.args = {
  text: 'This is a tooltip',
  position: 'top',
  variant: 'dark',
}

// Tooltip with different variants
export const Light = Template.bind({})
Light.args = {
  text: 'This is a light tooltip',
  variant: 'light',
}

export const Success = Template.bind({})
Success.args = {
  text: 'This is a success tooltip',
  variant: 'success',
}

export const Info = Template.bind({})
Info.args = {
  text: 'This is an info tooltip',
  variant: 'info',
}

export const Warning = Template.bind({})
Warning.args = {
  text: 'This is a warning tooltip',
  variant: 'warning',
}

export const Danger = Template.bind({})
Danger.args = {
  text: 'This is a danger tooltip',
  variant: 'danger',
}
