import { ComponentMeta, ComponentStory } from '@storybook/react'

import Badge from './Badge'

export default {
  title: 'Atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => {
  return <Badge {...args} />
}

const GalleryTemplate: ComponentStory<typeof Badge> = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
    >
      <Badge {...args} label="Primary badge" color="primary" />
      <Badge {...args} label="Secondary badge" color="secondary" />
      <Badge {...args} label="Error badge" color="danger" />
      <Badge {...args} label="Success badge" color="success" />
      <Badge {...args} label="Warning badge" color="warning" />
      <Badge {...args} label="Info badge" color="info" />
      <Badge {...args} label="Gray badge" color="gray" />
      <Badge {...args} label="Dark badge" color="dark" />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Badge',
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

export const RoundedBadge = () => {
  return <Badge isRounded label="10" skin="solid" color="primary" size="small" />
}
