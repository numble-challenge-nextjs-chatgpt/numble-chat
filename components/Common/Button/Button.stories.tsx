import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Common/Button',
  component: Button,
  //   parameters: {
  //     layout: 'centered',
  //   },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonBlue = Template.bind({ width: '100' });
ButtonBlue.args = {
  color: 'B',
  size: 'L',
  children: '인증',
};

export const ButtonRed = Template.bind({});
ButtonRed.args = {
  color: 'R',
  size: 'L',
  children: '생성',
};
