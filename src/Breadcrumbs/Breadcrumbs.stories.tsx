import { ComponentMeta, ComponentStory } from '@storybook/react'

import Breadcrumbs from './Breadcrumbs'

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component: 'Breadcrumb - This is a custom Breadcrumb component',
      },
    },
  },
} as ComponentMeta<typeof Breadcrumbs>

const Template: ComponentStory<typeof Breadcrumbs> = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Category', path: '/products/category' },
    { label: 'Current Page' }, // No path for the current page
  ]

  return <Breadcrumbs items={breadcrumbItems} />
}

export const Default = Template.bind({})

export const LongMobileLabels: ComponentStory<typeof Breadcrumbs> = () => (
  <div style={{ width: 320 }}>
    <Breadcrumbs
      items={[
        { label: 'Dashboard overview', path: '/' },
        { label: 'Procurement management', path: '/procurement' },
        { label: 'Create new purchase receipt' },
      ]}
    />
  </div>
)
