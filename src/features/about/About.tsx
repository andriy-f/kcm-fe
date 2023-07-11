/**
 * TODO: add external links
 */
import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Typography } from '@mui/material'

const About = () => (
  <article>
    <Container>
      <Typography variant="h2" textAlign='center'>Welcome to</Typography>
      <Typography variant="h1" textAlign='center'>K Contact Manager</Typography>
    </Container>
    <section>
      <Typography variant="h5">Description</Typography>
      <Typography variant="body1" gutterBottom>
        This is example of contact manager application. It shows how it be implemented as separate front-end and back-end services.
      </Typography>
    </section>
    <section>
      <Typography variant="h5">Usage</Typography>
      <Typography variant="body1" gutterBottom>
        Use top-left menu button to show navigation panel
      </Typography>
      <Typography variant="body1" gutterBottom>
        ...or go directrly to <Link to="/contacts">Contacts.</Link>
      </Typography>
      {/* <strong>Mobile and tablets: </strong>You can click "Add to Home screen" in supported mobile browser's menu to install this app on your device. (Progressive web app) */}
    </section>
    <section>
      <Typography variant="h5">Features</Typography>
      <Typography variant="body1" gutterBottom>
        <ul>
          <li>Contact management (CRUD)</li>
          <li>Material Design</li>
          <li>Authentication</li>
          <li>Filtering</li>
          <li>Pagination (via infinite scrolling)</li>
        </ul>
      </Typography>
    </section>
    <section>
      <Typography variant="h5">Technologies</Typography>
      <Typography variant="body1">
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>GraphQL (next genetarion API)</li>
          <li>Service worker (Progressive Web App)</li>
          <li>NodeJS, MongoDB and TypeScript for back-end server</li>
        </ul>
      </Typography>
    </section>
  </article>
)

export default About
