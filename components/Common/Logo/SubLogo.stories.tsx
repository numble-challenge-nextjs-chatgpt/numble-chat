import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubLogo from './SubLogo';
export default {
  title: 'Common/SubLogo',
  component: SubLogo,
  parameters: {
    layout: 'screen',
  },
} as ComponentMeta<typeof SubLogo>;

const Template: ComponentStory<typeof SubLogo> = () => <SubLogo />;

export const SubLogoFirst = Template.bind({});
