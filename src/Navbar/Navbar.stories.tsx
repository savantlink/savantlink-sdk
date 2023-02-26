import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Navbar from './Navbar'
import Button from '../Button'

export default {
  title: 'Molecules/Navbar',
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: 'Navbar component for page layout',
      },
    },
  },
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => {
  return (
    <Navbar style={{ background: 'var(--color-dark-light)' }} {...args}>
      <h5 style={{ color: 'var(--color-light)', marginLeft: '1rem', fontWeight: 'var(--font-weight-bold)' }}>Logo</h5>
      <Button style={{ marginRight: '0.5rem' }} size="sm">
        Login
      </Button>
    </Navbar>
  )
}

export const Default = Template.bind({})
