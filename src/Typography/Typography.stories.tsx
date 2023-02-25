import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Typography from './Typography'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Foundation/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Typography>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args}>Header</Typography>

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}

export const AllTypography = () => {
  // Sets the hooks for both the label and primary props
  return (
    <>
      <Typography tag="h1"> Header 1</Typography>
      <Typography tag="h2"> Header 2</Typography>
      <Typography tag="h3"> Header 3</Typography>
      <Typography tag="h4"> Header 4</Typography>
      <Typography tag="h5"> Header 5</Typography>
      <Typography tag="h6"> Header 6</Typography>
      <Typography tag="p" variant="large">
        This is a paragraph text with a large size. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
        turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
        sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
      </Typography>
      <Typography tag="p" variant="regular">
        This is a paragraph text with a medium size. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
        turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
        sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
      </Typography>
      <Typography tag="p" variant="small">
        This is a paragraph text with a small size. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
        turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
        sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
      </Typography>
      <Typography tag="label"> This is a label</Typography> <br />
      <Typography tag="label" weight="bold">
        This is a strong label
      </Typography>
    </>
  )
}
