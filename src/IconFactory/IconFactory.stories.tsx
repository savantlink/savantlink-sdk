import { ComponentMeta, ComponentStory } from '@storybook/react'

import IconFactory from './IconFactory'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/IconFactory',
  component: IconFactory,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof IconFactory>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconFactory> = (args) => <IconFactory {...args}>Header</IconFactory>

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {name:"home"}

export const Icons = () => {
  // Sets the hooks for both the label and primary props
  return (
    <>
      <IconFactory name="card" />
      <IconFactory name="chevron-down" />
      <IconFactory name="chevron-left" />
      <IconFactory name="edit" />
      <IconFactory name="eye" />
      <IconFactory name="global-search" />
      <IconFactory name="products" />
      <IconFactory name="wallet-check" />
    </>
  )
}
