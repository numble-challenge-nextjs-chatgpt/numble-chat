import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalTemplate from './Template';

export default {
  title: 'Common/GlobalTemplate',
  component: GlobalTemplate,
  parameters: {
    layout: 'screen',
  },
} as ComponentMeta<typeof GlobalTemplate>;

const Template: ComponentStory<typeof GlobalTemplate> = (args) => <GlobalTemplate {...args} />;

export const Global = Template.bind({});
