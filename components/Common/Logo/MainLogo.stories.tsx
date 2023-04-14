import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainLogo from './MainLogo';
export default {
  title: 'Common/MainLogo',
  component: MainLogo,
  parameters: {
    layout: 'screen',
  },
} as ComponentMeta<typeof MainLogo>;

const Template: ComponentStory<typeof MainLogo> = () => <MainLogo />;

export const MainLogoFirst = Template.bind({});
