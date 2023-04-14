import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatListTemplate from './Template';
import GlobalTemplate from '../Common/Global/Template';
export default {
  title: 'ChatList/Template',
  component: ChatListTemplate,
  parameters: {
    layout: 'screen',
  },
} as ComponentMeta<typeof ChatListTemplate>;

const Template: ComponentStory<typeof ChatListTemplate> = () => (
  <GlobalTemplate>
    <ChatListTemplate />
  </GlobalTemplate>
);

export const ChatList = Template.bind({});
