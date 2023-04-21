import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import NotAuthorized from './NotAuthorized'

it('renders without crashing', () => {
  render(<NotAuthorized />, { wrapper: MemoryRouter})
})

it('Has relevant text', () => {

  render(<NotAuthorized />, { wrapper: MemoryRouter})
  const text = screen.getByText(/You are not authorized/i)
  expect(text).toBeInTheDocument()
})
