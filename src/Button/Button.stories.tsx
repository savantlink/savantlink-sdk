import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Click Me',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>{args.children}</Button>;
};

export const Default = Template.bind({});

export const solid = () => {
  return <Button skin="solid">Solid default (Medium)</Button>;
};

export const outline = () => {
  return <Button skin="outline">Outline default (Medium)</Button>;
};

export const flat = () => {
  return <Button skin="flat">Flat default (Medium)</Button>;
};

export const underline = () => {
  return <Button skin="underline">Underline default (Medium)</Button>;
};

