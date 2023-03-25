import type { Meta } from '@storybook/react';
import { Tag, TagProps } from './tag';

const Story: Meta<typeof Tag> = {
  component: Tag,
  title: 'Shared/Tag',
};
export default Story;

export const Active = {
  args: { variant: 'active' } as TagProps,
};

export const InProgress = {
  args: { variant: 'in-progress' } as TagProps,
};

export const Done = {
  args: { variant: 'done' } as TagProps,
};

export const High = {
  args: { variant: 'high' } as TagProps,
};
