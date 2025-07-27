import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import Tabs from './Tabs'

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
    decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/?activeTab=tab1']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Tabs - This is a custom Tabs component',
      },
    },
  },
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = () => {
  return (
    <Tabs
      tabs={[
        { id: 'tab1', label: 'Tab 1', content: <div>Tab 1</div> },
        { id: 'tab2', label: 'Tab 2', content: <div>Tab 2</div> },
        { id: 'tab3', label: 'Tab 3', content: <div>Tab 3</div> },
      ]}
    />
  )
}

export const Default = Template.bind({})
