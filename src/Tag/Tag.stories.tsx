import { ComponentMeta, ComponentStory } from '@storybook/react'

import Tag from './Tag'

export default {
  title: 'Atoms/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => {
  return <Tag {...args} />
}

const GalleryTemplate: ComponentStory<typeof Tag> = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
    >
      <Tag {...args} label="Primary tag" color="primary" />
      <Tag {...args} label="Secondary tag" color="secondary" />
      <Tag {...args} label="Error tag" color="danger" />
      <Tag {...args} label="Success tag" color="success" />
      <Tag {...args} label="Warning tag" color="warning" />
      <Tag {...args} label="Info tag" color="info" />
      <Tag {...args} label="Gray tag" color="gray" />
      <Tag {...args} label="Dark tag" color="dark" />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Tag',
  skin: 'solid',
  color: 'primary',
}

export const SolidBadges = GalleryTemplate.bind({})
SolidBadges.args = {
  skin: 'solid',
}
SolidBadges.parameters = { controls: { exclude: ['label', 'color', 'skin'] } }

export const TranslucentBadges = GalleryTemplate.bind({})
TranslucentBadges.args = {
  skin: 'translucent',
}
TranslucentBadges.parameters = {
  ...SolidBadges.parameters,
}

export const OutlineBadges = GalleryTemplate.bind({})
OutlineBadges.args = {
  skin: 'outline',
}
OutlineBadges.parameters = {
  ...SolidBadges.parameters,
}
