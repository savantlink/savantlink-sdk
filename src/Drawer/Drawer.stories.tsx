/* eslint-disable no-console */
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Drawer from './Drawer'

// Meta information for the component
const meta: ComponentMeta<typeof Drawer> = {
  title: 'Organisms/Drawer',
  component: Drawer,
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls the visibility of the drawer',
    },
    onClose: {
      action: 'closed',
      description: 'Callback function when the drawer is closed',
    },
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Position of the drawer (left, right, top, or bottom)',
    },
    children: {
      control: 'text',
      description: 'Content inside the drawer',
    },
  },
}

export default meta

// Define the base template
const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

// Stories
export const LeftDrawer = Template.bind({})
LeftDrawer.args = {
  isOpen: true,
  onClose: () => console.log('Drawer closed'),
  position: 'left',
  children: 'This is a left drawer.',
}

export const RightDrawer = Template.bind({})
RightDrawer.args = {
  isOpen: true,
  onClose: () => console.log('Drawer closed'),
  position: 'right',
  children: 'This is a right drawer.',
}

export const TopDrawer = Template.bind({})
TopDrawer.args = {
  isOpen: true,
  onClose: () => console.log('Drawer closed'),
  position: 'top',
  children: 'This is a top drawer.',
}

export const BottomDrawer = Template.bind({})
BottomDrawer.args = {
  isOpen: true,
  onClose: () => console.log('Drawer closed'),
  position: 'bottom',
  children: 'This is a bottom drawer.',
}

export const WithCustomContent = Template.bind({})
WithCustomContent.args = {
  isOpen: true,
  onClose: () => console.log('Drawer closed'),
  position: 'left',
  children: (
    <div>
      <h2>Custom Content</h2>
      <p>This drawer has custom JSX content.</p>
      <button onClick={() => console.log('Button clicked')}>Click Me</button>
    </div>
  ),
}

export const WithScrollableContent = Template.bind({})
WithScrollableContent.args = {
  isOpen: true,
  onClose: () => console.log('Drawer closed'),
  position: 'left',
  children: (
    <div>
      <h2>Scrollable Content</h2>
      <p>This drawer demonstrates scrollable content when it exceeds the drawer height.</p>
      {Array.from({ length: 10 }, (_, index) => (
        <div key={index} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
          <h4>Item {index + 1}</h4>
          <p>This is some content for item {index + 1}. The drawer should be scrollable when content overflows.</p>
        </div>
      ))}
    </div>
  ),
}
