import React from 'react'

import { render } from '@testing-library/react'

import Alert from './Alert'

describe('Alert', () => {
  it('renders properly', () => {
    const view = render(
      <Alert
        color="danger"
        title="Internal Server Error"
        text="We're sorry, but our server is currently down. We are working to resolve the issue as quickly as possible. Please try again later. Thank you for your patience."
      />
    ).baseElement
    expect(view).toMatchSnapshot()
  })
})
