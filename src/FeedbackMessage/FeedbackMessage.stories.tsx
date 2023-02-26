// Icons
import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import  FeedbackMessage  from './FeedbackMessage'

import CircleExclamation from '@/icons/system/circle-exclamation.svg'

export default {
  title: 'Molecules/FeedbackMessage',
  component: FeedbackMessage,
  parameters: {
    docs: {
      description: {
        component: 'This is a reusable component to give feedback about to users`',
      },
    },
  },
} as ComponentMeta<typeof FeedbackMessage>

const Template: ComponentStory<typeof FeedbackMessage> = (args) => {
  return <FeedbackMessage {...args} />
}

export const Default = Template.bind({})

Default.story = {
  args: {
    icon: <CircleExclamation width={80} height={80}/>,
    title: 'Sorry!...Unsupported Device',
    subtitle:
      "This software currently doesn't support mobile devices. For best experience, We recommend you access the dashboard with Google Chrome, Mozilla Firefox or any other suitable browser on a DESKTOP or TABLET device!",
    buttonText: 'Download Now',
  },
}
