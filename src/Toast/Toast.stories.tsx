/* eslint-disable no-console */
import { useState } from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Toast from './Toast'
import CheckMarkIcon from '../../icons/mono-color/check.svg'

export default {
  title: 'Molecules/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: 'Toast - This is a custom toast component',
      },
    },
  },
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = () => {
  const [showToast, setShowToast] = useState(false)

  return (
    <div>
      <button onClick={() => setShowToast(true)}>Show Toast</button>
      {showToast && (
        <Toast
          message="This is test message"
          variant="success"
          position="top-right"
          onClose={() => setShowToast(false)}
          icon={<CheckMarkIcon/>}
        />
      )}
    </div>
  )
}

export const Default = Template.bind({})

export const success = () => {
  return (
    <Toast
      message="This is test message"
      variant="success"
      position="top-right"
      onClose={() => console.log('success')}
    />
  )
}

export const warning = () => {
  return (
    <Toast
      message="This is test message"
      variant="warning"
      position="top-left"
      onClose={() => console.log('warning')}
    />
  )
}

export const info = () => {
  return <Toast message="This is test message" variant="info" position="top-left" onClose={() => console.log('info')} />
}

export const danger = () => {
  return (
    <Toast
      message="This is test message with a longer text that is extraordinarily longer"
      variant="danger"
      position="top-left"
      onClose={() => console.log('danger')}
      icon={<CheckMarkIcon/>}
    />
  )
}
