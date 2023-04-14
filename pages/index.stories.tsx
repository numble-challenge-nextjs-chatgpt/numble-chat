import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Index from './index';
export default {
  title: 'Page/Index',
  component: Index,
  parameters: {
    layout: 'screen',
  },
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = () => <Index />;

export const MainPage = Template.bind({});
