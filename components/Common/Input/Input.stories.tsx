import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';
export default {
  title: 'Common/Input',
  component: Input,
  parameters: {
    layout: 'screen',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputFirst = Template.bind({});
