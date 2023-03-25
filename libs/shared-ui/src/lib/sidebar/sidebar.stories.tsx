import type { Meta } from '@storybook/react';
import Icon from '../icon/icon';
import { NavbarSectionProps } from '../navbar-section/navbar-section';
import { Sidebar } from './sidebar';

const Story: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Sidebar/Sidebar',
};
export default Story;

export const Primary = {
  args: {
    options: [
      {
        icon: <Icon variant="home" />,
        text: 'Dashboard',
      },
      {
        icon: <Icon variant="folder" />,
        text: 'Projects',
      },
      {
        icon: <Icon variant="table" />,
        text: 'Reports',
      },
      {
        icon: <Icon variant="server" />,
        text: 'Admin',
      },
    ],
  } as NavbarSectionProps,
};
