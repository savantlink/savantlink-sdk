/* eslint-disable no-console */
import { ComponentMeta, ComponentStory } from '@storybook/react'

import FileUpload from './FileUpload'

export default {
  title: 'Organisms/FileUpload',
  component: FileUpload,
  argTypes: {
    onChange: { action: 'changed' }, // logs changes in the Actions panel
  },
} as ComponentMeta<typeof FileUpload>

const Template: ComponentStory<typeof FileUpload> = (args) => <FileUpload {...args} />

export const Default = Template.bind({})
Default.args = {
  onFile: (file) => {
    console.log(file)
  },
}
