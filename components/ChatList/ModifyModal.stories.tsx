import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ModifyModal from './ModifyModal';

export default {
  title: 'ChatList/ModifyModal',
  component: ModifyModal,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ModifyModal>;

const Template: ComponentStory<typeof ModifyModal> = (args) => <ModifyModal {...args} />;

export const Base = Template.bind({});
