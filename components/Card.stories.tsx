import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const CardComponent: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Width = CardComponent.bind({});
Width.args = {
  width: 30,
  height: 50,
};
