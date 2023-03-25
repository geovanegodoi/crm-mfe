import { render } from '@testing-library/react';

import MeetingsPanel from './meetings-panel';

describe('MeetingsPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MeetingsPanel />);
    expect(baseElement).toBeTruthy();
  });
});
