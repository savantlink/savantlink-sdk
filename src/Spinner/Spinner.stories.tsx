import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Spinner from './Spinner'

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: 'Loading spinner',
      },
    },
  },
 
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = () => {
  return <Spinner />
}

export const Default = Template.bind({})
