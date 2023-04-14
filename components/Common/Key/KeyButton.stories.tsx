import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import KeyButton from './KeyButton';
export default {
  title: 'Key/KeyButton',
  component: KeyButton,
} as ComponentMeta<typeof KeyButton>;

const Template: ComponentStory<typeof KeyButton> = () => <KeyButton />;

export const KeyButtonFirst = Template.bind({});
