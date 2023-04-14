import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatList from './chatList';
export default {
  title: 'Page/ChatList',
  component: ChatList,
  parameters: {
    layout: 'screen',
  },
} as ComponentMeta<typeof ChatList>;

const Template: ComponentStory<typeof ChatList> = () => <ChatList />;

export const ChatTemplate = Template.bind({});
