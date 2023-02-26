import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Banner from './Banner'

export default {
  title: 'Molecules/Banner',
  component: Banner,
  parameters: {
    docs: {
      description: {
        component: 'This is a reusable banner component`',
      },
    },
  },
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = (args) => {
  return (
    <Banner {...args}>
      Your account&#39;s subscription expires in four (4) days. Don&#39;t forget to renew your subscription
    </Banner>
  )
}

export const Default = Template.bind({})

Default.story = {
  args: {
    color: 'warning',
  },
}
