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
      <Typography variant="h4">Description</Typography>
      <Typography variant="body1" gutterBottom>
        This is an example of contact manager application, implemented as separate front-end and back-end services connected via GraphQL.<br/>
        Such an architecture enables developers to relatively easy replace some service with another,
      </Typography>
    </section>
    <section>
      <Typography variant="h4">Usage</Typography>
      <Typography variant="body1" gutterBottom>
        Use top-left menu button to show navigation panel
      </Typography>
      <Typography variant="body1" gutterBottom>
        ...or go directrly to <Link to="/contacts">Contacts.</Link>
      </Typography>
      {/* <strong>Mobile and tablets: </strong>You can click "Add to Home screen" in supported mobile browser's menu to install this app on your device. (Progressive web app) */}
    </section>
    <section>
      <Typography variant="h4">Features</Typography>
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
      <Typography variant="h4">Technologies</Typography>
      <Typography variant="h5">Front end</Typography>
      <Typography variant="body1" variantMapping={{ 'body1': 'div' }}>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>TypeScript</li>
          <li>GraphQL (next genetarion API)</li>
          {/* <li>Service worker (Progressive Web App)</li> */}
        </ul>
      </Typography>
      <Typography variant="h5">Back end</Typography>
      <Typography variant="body1" variantMapping={{ 'body1': 'div' }}>
        <ul>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>TypeScript</li>
          <li>GraphQL</li>
        </ul>
      </Typography>
    </section>
  </article>
)

export default About
