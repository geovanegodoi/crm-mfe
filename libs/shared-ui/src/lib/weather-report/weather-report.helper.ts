import { WeatherIconProps } from '../weather-icon/weather-icon';

export function getWeatherIconProps(
  weathercode: number
): WeatherIconProps | undefined {
  switch (weathercode) {
    case 0:
      return {
        variant: 'sunny',
        label: 'Clear sky',
      };

    case 1:
    case 2:
    case 3:
      return {
        variant: 'cloudy',
        label: 'Partly cloudy',
      };

    case 45:
    case 48:
      return {
        variant: 'fog',
        label: 'fog',
      };

    case 51:
    case 53:
    case 55:
      return {
        variant: 'drizzle',
        label: 'drizzle',
      };

    case 56:
    case 57:
      return {
        variant: 'snowy',
        label: 'freezing rizzle',
      };

    case 61:
    case 63:
    case 65:
      return {
        variant: 'rainy',
        label: 'rainy',
      };

    case 66:
    case 67:
      return {
        variant: 'snow',
        label: 'freezing rain',
      };

    case 71:
    case 73:
    case 75:
      return {
        variant: 'snow',
        label: 'snow fall',
      };

    case 77:
      return {
        variant: 'snowy',
        label: 'snow grains',
      };

    case 80:
    case 81:
    case 82:
      return {
        variant: 'rainy',
        label: 'rain showers',
      };

    case 85:
    case 86:
      return {
        variant: 'snowy',
        label: 'snow showers',
      };

    case 95:
    case 96:
    case 99:
      return {
        variant: 'thunder',
        label: 'Thunderstorm',
      };
  }
}
