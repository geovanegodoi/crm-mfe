import { render } from '@testing-library/react';

import WeatherIcon from './weather-icon';

describe('WeatherIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeatherIcon />);
    expect(baseElement).toBeTruthy();
  });
});
