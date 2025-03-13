/* eslint-disable no-console */
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Modal from './Modal'

// Meta information for the component
const meta: ComponentMeta<typeof Modal> = {
  title: 'Organisms/Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls the visibility of the modal',
    },
    onClose: {
      action: 'closed',
      description: 'Callback function when the modal is closed',
    },
    position: {
      control: 'select',
      options: ['top', 'center'],
      description: 'Position of the modal (top or center)',
    },
    children: {
      control: 'text',
      description: 'Content inside the modal',
    },
  },
}

export default meta

// Define the base template
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

// Stories
export const Default = Template.bind({})
Default.args = {
  isOpen: false,
  onClose: () => console.log('Modal closed'),
  position: 'center',
  children: 'This is a default modal.',
  showDefaultClose: true
}

export const TopPosition = Template.bind({})
TopPosition.args = {
  isOpen: false,
  onClose: () => console.log('Modal closed'),
  position: 'top',
  children: 'This is a modal positioned at the top.',
  showDefaultClose: true
}

export const WithCustomContent = Template.bind({})
WithCustomContent.args = {
  isOpen: false,
  onClose: () => console.log('Modal closed'),
  position: 'center',
  children: (
    <div>
      <h2>Custom Content</h2>
      <p>This modal has custom JSX content.</p>
      <button onClick={() => console.log('Button clicked')}>Click Me</button>
    </div>
  ),
  showDefaultClose: true
}
