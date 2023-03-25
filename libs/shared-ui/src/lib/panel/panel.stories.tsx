import type { Meta } from '@storybook/react';
import { Panel, PanelProps } from './panel';

const Story: Meta<typeof Panel> = {
  component: Panel,
  title: 'Shared/Panel',
};
export default Story;

export const Primary = {
  args: {} as PanelProps,
};
