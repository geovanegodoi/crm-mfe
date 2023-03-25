import type { Meta } from '@storybook/react';
import { WeatherIcon, WeatherIconProps } from './weather-icon';

const Story: Meta<typeof WeatherIcon> = {
  component: WeatherIcon,
  title: 'Weather/Icon',
};
export default Story;

export const Cloud = {
  args: {
    variant: 'cloud',
  } as WeatherIconProps,
};

export const Cloudy = {
  args: {
    variant: 'cloudy',
  } as WeatherIconProps,
};

export const Drizzle = {
  args: {
    variant: 'drizzle',
  } as WeatherIconProps,
};

export const Fog = {
  args: {
    variant: 'fog',
  } as WeatherIconProps,
};

export const Rainy = {
  args: {
    variant: 'rainy',
  } as WeatherIconProps,
};

export const Snow = {
  args: {
    variant: 'snow',
  } as WeatherIconProps,
};

export const Snowy = {
  args: {
    variant: 'snowy',
  } as WeatherIconProps,
};

export const Sunny = {
  args: {
    variant: 'sunny',
  } as WeatherIconProps,
};

export const Thunder = {
  args: {
    variant: 'thunder',
  } as WeatherIconProps,
};
