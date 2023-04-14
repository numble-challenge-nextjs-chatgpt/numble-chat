import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainTemplate from './Template';
import GlobalTemplate from '../Common/Global/Template';
export default {
  title: 'Main/Template',
  component: MainTemplate,
  parameters: {
    layout: 'screen',
  },
} as ComponentMeta<typeof MainTemplate>;

const Template: ComponentStory<typeof MainTemplate> = () => (
  <GlobalTemplate>
    <MainTemplate />
  </GlobalTemplate>
);

export const TemplateFirst = Template.bind({});
