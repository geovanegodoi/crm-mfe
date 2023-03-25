import type { Meta } from '@storybook/react';
import Icon from '../icon/icon';
import { NavbarSection, NavbarSectionProps } from './navbar-section';

const Story: Meta<typeof NavbarSection> = {
  component: NavbarSection,
  title: 'Sidebar/Navbar Section',
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '1em 0em 1em 1em',
          background: 'var(--primary-color)',
        }}
      >
        {Story()}
      </div>
    ),
  ],
};
export default Story;

export const Primary = {
  args: {
    separator: true,
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

export const Secondary = {
  args: {
    options: [
      {
        icon: <Icon variant="file-invoice" />,
        text: 'Invoices',
      },
      {
        icon: <Icon variant="server" />,
        text: 'Support',
      },
      {
        icon: <Icon variant="wrench" />,
        text: 'Settings',
      },
    ],
  } as NavbarSectionProps,
};
