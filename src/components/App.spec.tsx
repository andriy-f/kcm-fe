import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

it('renders without crashing', () => {
  render(<App />)
})

// it('Has "Welcome" text in it', () => {
//   render(<App />)
//   const welcome = screen.getByText(/Welcome/i)
//   expect(welcome).toBeInTheDocument()
// })
