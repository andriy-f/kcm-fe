import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import About from './About'

it('renders without crashing', () => {
  render(<About />, { wrapper: BrowserRouter })
})

it('Has "Welcome" text in it', () => {
  render(<About />, { wrapper: BrowserRouter })
  const welcome = screen.getByText(/Welcome/)
  expect(welcome).toBeInTheDocument()
})

it('Contacts link is working', async () => {
  render(<About />, { wrapper: BrowserRouter })
  const user = userEvent.setup()
  await user.click(screen.getByText(/contacts/i))
  // TODO
})
