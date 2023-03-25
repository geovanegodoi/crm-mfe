import type { Meta } from '@storybook/react';
import { Meeting, MeetingProps } from './meeting';

const Story: Meta<typeof Meeting> = {
  component: Meeting,
  title: 'Meetings/Single',
};
export default Story;

export const Primary = {
  args: {
    title: ['astudio', 'alexander'],
    date: '10/03/2023',
    time: '11:30',
    duration: '30min',
  } as MeetingProps,
};
