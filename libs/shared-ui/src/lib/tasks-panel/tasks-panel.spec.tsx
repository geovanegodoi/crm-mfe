import { render } from '@testing-library/react';

import TasksPanel from './tasks-panel';

describe('TasksPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TasksPanel />);
    expect(baseElement).toBeTruthy();
  });
});
