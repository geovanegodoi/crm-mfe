import { render } from '@testing-library/react';

import NavbarSection from './navbar-section';

describe('NavbarSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavbarSection />);
    expect(baseElement).toBeTruthy();
  });
});
