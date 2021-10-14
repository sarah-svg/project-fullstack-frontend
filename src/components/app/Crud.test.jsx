import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router';
import Crud from './Crud';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<MemoryRouter> <Crud/></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});