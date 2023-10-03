import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

it('renders without crashing', () => {
  render(<App />)
})

// it('Has "Welcome" text in it', () => {
//   render(<App />)
//   const welcome = screen.getByText(/Welcome/i)
//   expect(welcome).toBeInTheDocument()
// })

it('Contacts link on About page is working', async () => {
  render(<App />)
  await screen.findByText(/Welcome/i) // Wait for about page to load
  const user = userEvent.setup()
  await user.click(screen.getByText(/contacts/i)) // Click contacts link on About page
  expect(await screen.findByText(/Log into/)).toBeInTheDocument() // Contacts page show log in because user is not logged in
})
