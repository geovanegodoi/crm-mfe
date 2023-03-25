import type { Meta } from '@storybook/react';
import { TasksPanel, TasksPanelProps } from './tasks-panel';

const Story: Meta<typeof TasksPanel> = {
  component: TasksPanel,
  title: 'Tasks/Panel',
};
export default Story;

export const Primary = {
  args: {
    tasks: [{ id: 1, label: 'This is an example task' }],
  } as TasksPanelProps,
};
