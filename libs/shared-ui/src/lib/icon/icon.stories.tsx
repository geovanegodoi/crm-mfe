import type { Meta } from '@storybook/react';
import { Icon, IconProps } from './icon';

const Story: Meta<typeof Icon> = {
  component: Icon,
  title: 'Shared/Icon',
};
export default Story;

export const Home = {
  args: { variant: 'home', size: 'xlarge', color: 'black' } as IconProps,
};

export const FileInvoice = {
  args: { ...Home.args, variant: 'file-invoice' } as IconProps,
};

export const Folder = {
  args: { ...Home.args, variant: 'folder' } as IconProps,
};

export const Server = {
  args: { ...Home.args, variant: 'server' } as IconProps,
};

export const Table = {
  args: { ...Home.args, variant: 'table' } as IconProps,
};

export const Wrench = {
  args: { ...Home.args, variant: 'wrench' } as IconProps,
};

export const Bullhorn = {
  args: { ...Home.args, variant: 'bullhorn', color: 'primary' } as IconProps,
};
