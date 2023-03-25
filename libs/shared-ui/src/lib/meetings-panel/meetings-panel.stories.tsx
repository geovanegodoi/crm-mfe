import type { Meta } from '@storybook/react';
import { MeetingsPanel, MeetingsPanelProps } from './meetings-panel';
import * as MeetingStories from '../meeting/meeting.stories';

const Story: Meta<typeof MeetingsPanel> = {
  component: MeetingsPanel,
  title: 'Meetings/Panel',
};
export default Story;

export const Primary = {
  args: {
    meetings: [MeetingStories.Primary.args],
  } as MeetingsPanelProps,
};
