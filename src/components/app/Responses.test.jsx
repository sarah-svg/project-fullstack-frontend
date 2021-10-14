import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Responses from './Responses';

describe.skip('App component', () => {
  afterEach(() => cleanup());
  it('renders response', async () => {
    const response =  'hey' ;
    const { asFragment } =
        await
        render(<MemoryRouter> <Responses res={response} /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
// eslint-disable-next-line eol-last
});