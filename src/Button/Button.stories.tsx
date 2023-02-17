import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'
// import SearchIcon from '@/icons/system/search.svg'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Hello World',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>{args.children}</Button>
}

export const button = Template.bind({})

export const solid = () => {
  return (
    <>
      <Button skin="solid">
        Solid default (md)
      </Button>
      <hr />
      <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
        <Button skin="solid" size="sm">
          Solid small
        </Button>
        <Button skin="solid" size="md">
          Solid medium
        </Button>
        <Button skin="solid" size="lg">
          Solid large
        </Button>
        <Button skin="solid" size="wide">
          Solid wide
        </Button>
      </div>
    </>
  )
}

export const outline = () => {
  return (
    <>
      <Button skin="outline">
        Outline default (md)
      </Button>
      <hr />
      <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
        <Button skin="outline" size="sm">
          Outline small
        </Button>
        <Button skin="outline" size="md">
          Outline medium
        </Button>
        <Button skin="outline" size="lg">
          Outline large
        </Button>
        <Button skin="outline" size="wide">
          Outline wide
        </Button>
      </div>
    </>
  )
}

export const flat = () => {
  return (
    <>
      <Button skin="flat">
        Flat default (md)
      </Button>
      <hr />
      <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
        <Button skin="flat" size="sm">
          Flat small
        </Button>
        <Button skin="flat" size="md">
          Flat medium
        </Button>
        <Button skin="flat" size="lg">
          Flat large
        </Button>
        <Button skin="flat" size="wide">
          Flat wide
        </Button>
      </div>
    </>
  )
}

export const underline = () => {
  return (
    <>
      <Button skin="underline">
        Underline default (md)
      </Button>
      <hr />
      <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
        <Button skin="underline" size="sm">
          Underline small
        </Button>
        <Button skin="underline" size="md">
          Underline medium
        </Button>
        <Button skin="underline" size="lg">
          Underline large
        </Button>
        <Button skin="underline" size="wide">
          Underline wide
        </Button>
      </div>
    </>
  )
}
