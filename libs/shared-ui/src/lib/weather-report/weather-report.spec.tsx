import { render } from '@testing-library/react';

import WeatherReport from './weather-report';

describe('WeatherReport', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeatherReport />);
    expect(baseElement).toBeTruthy();
  });
});
