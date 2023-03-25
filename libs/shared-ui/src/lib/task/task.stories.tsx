import type { Meta } from '@storybook/react';
import { Task } from './task';

const Story: Meta<typeof Task> = {
  component: Task,
  title: 'Tasks/Single',
};
export default Story;

export const Primary = {
  args: {},
};
