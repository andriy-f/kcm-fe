import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'

import App from './App'

it('renders without crashing', () => {
  render(<App />)
})

it('Contacts link on About page is working', async () => {
  render(<App />)
  await screen.findByText(/Welcome/i) // Wait for about page to load
  const user = userEvent.setup()
  await user.click(screen.getByText(/contacts/i)) // Click contacts link on About page
  expect(await screen.findByText(/Log into/)).toBeInTheDocument() // Contacts page show log in because user is not logged in
})
