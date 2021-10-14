import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router';
import ResOne from './Res-One';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders res-one', async () => {
    const { asFragment } = render(<MemoryRouter>
      <ResOne/></MemoryRouter>);
    await  expect(asFragment()).toMatchSnapshot();
  });
});
