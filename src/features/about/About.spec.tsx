import React from 'react'
import { render, screen } from '@testing-library/react'
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
