import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RoomCreate from './RoomCreate';

export default {
  title: 'ChatList/RoomCreate',
  component: RoomCreate,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof RoomCreate>;

const Template: ComponentStory<typeof RoomCreate> = () => <RoomCreate />;

export const CreateRoom = Template.bind({});
