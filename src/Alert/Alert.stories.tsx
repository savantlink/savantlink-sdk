import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Alert from './Alert'

export default {
  title: 'Molecules/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => {
  return <Alert {...args} />
}

const GalleryTemplate: ComponentStory<typeof Alert> = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
    >
      <Alert {...args} color="danger" />
    </div>
  )
}

export const defaultAlert = Template.bind({})
defaultAlert.args = {
  color: 'danger',
  title: 'Internal Server Error',
  text: "We're sorry, but our server is currently down. We are working to resolve the issue as quickly as possible. Please try again later. Thank you for your patience.",
}

export const OutlineAlerts = GalleryTemplate.bind({})
OutlineAlerts.args = {
  title: 'Internal Server Error',
  text: "We're sorry, but our server is currently down. We are working to resolve the issue as quickly as possible. Please try again later. Thank you for your patience.",
}
OutlineAlerts.parameters = { controls: { exclude: ['label', 'color', 'skin'] } }
