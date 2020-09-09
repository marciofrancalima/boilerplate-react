import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('should render a heading', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /hello world/i }));
  });
});
