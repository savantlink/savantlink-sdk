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
      <Badge {...args} count={20} color="primary" />
      <Badge {...args} count={20} color="secondary" />
      <Badge {...args} count={20} color="danger" />
      <Badge {...args} count={20} color="success" />
      <Badge {...args} count={20} color="warning" />
      <Badge {...args} count={20} color="info" />
      <Badge {...args} count={20} color="gray" />
      <Badge {...args} count={20} color="dark" />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  count: 20,
  skin: 'solid',
  color: 'primary',
}

export const SolidBadges = GalleryTemplate.bind({})
SolidBadges.args = {
  skin: 'solid',
}
SolidBadges.parameters = { controls: { exclude: ['count', 'color', 'skin'] } }

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

export const BadgeWithParent = () => {
  return (
    <Badge count={9} color="primary">
      <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px', background: 'var(--color-gray-mercury)' }} />
    </Badge>
  )
}
