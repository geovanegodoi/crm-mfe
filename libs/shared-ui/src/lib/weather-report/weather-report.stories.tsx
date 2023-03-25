import type { Meta } from '@storybook/react';
import { WeatherReport } from './weather-report';

const Story: Meta<typeof WeatherReport> = {
  component: WeatherReport,
  title: 'Weather/Report',
};
export default Story;

export const Primary = {
  args: {},
};
