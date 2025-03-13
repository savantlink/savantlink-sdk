import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Textarea from './Textarea'

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>

// Template for individual stories
const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />

// Template for a gallery of Textarea variations
const GalleryTemplate: ComponentStory<typeof Textarea> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '500px',
    }}
  >
    <Textarea {...args} label="Default Textarea" placeholder="Enter text here..." />
    <Textarea {...args} label="Disabled Textarea" placeholder="Disabled" disabled />
    <Textarea {...args} label="Textarea with Value" value="This is a pre-filled value" />
    <Textarea {...args} label="Textarea with Custom Rows" rows={6} placeholder="6 rows tall" />
  </div>
)

// Default story
export const Default = Template.bind({})
Default.args = {
  label: 'Default Textarea',
  placeholder: 'Enter text here...',
}

// Gallery of Textarea variations
export const Gallery = GalleryTemplate.bind({})
Gallery.args = {}
Gallery.parameters = {
  controls: { exclude: ['label', 'placeholder', 'disabled', 'rows', 'value'] }, // Hide unnecessary controls in the gallery
}

// Disabled Textarea story
export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled Textarea',
  placeholder: 'This is disabled',
  disabled: true,
}

// Textarea with custom rows story
export const CustomRows = Template.bind({})
CustomRows.args = {
  label: 'Custom Rows Textarea',
  placeholder: 'This textarea has 6 rows',
  rows: 6,
}
