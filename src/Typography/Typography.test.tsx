import React from 'react'

import { render } from '@testing-library/react'

import Typography from './Typography'

describe('Typography', () => {
  test('renders properly', () => {
    const { getByText } = render(<Typography>How are you</Typography>)
    const paragraphElement = getByText(/How are you/i)
    expect(paragraphElement).toBeDefined()
  })

  test('renders correct Typoraphy tag', () => {
    const { getByRole } = render(<Typography tag="h1">How are you</Typography>)
    expect(getByRole('heading', { level: 1 })).toBeDefined()
  })

  test('renders the correct variant', () => {
    const { getByText } = render(<Typography variant="small">How are you</Typography>)
    const paragraphElement = getByText(/How are you/i)
    expect(paragraphElement.classList).toContain('small')
  })
})
