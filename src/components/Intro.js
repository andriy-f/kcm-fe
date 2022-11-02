import React from 'react'
import { Link } from 'react-router-dom'

import { intro__h } from '../App.module.css'

export default () => (
  <article>
    <h1 className={intro__h}>Welcome to K Contact Manager Sample App</h1>
    <section>
      <h2>Description</h2>
      <p>
        This is contact management application, a sample of how front-end or back-end can be implemented.
      </p>
    </section>
    <section>
      <h2>Usage</h2>
      <p>
        Use top-left menu button for navigation<br />
        or go directrly to <Link to="/contacts">Contacts.</Link>
      </p>
      <p>
        <strong>Mobile and tablets:</strong>You can click "Add to Home screen" in supported mobile browser's menu to install this app on your device. (Progressive web app)
      </p>
    </section>
    <section>
      <h2>Features</h2>
      <ul>
        <li>Contact management (CRUD)</li>
        <li>Material Design</li>
        <li>
          Authentication
        </li>
        <li>
          Filtering
        </li>
        <li>
          Pagination (via infinite scrolling)
        </li>
      </ul>
    </section>
    <section>
      <h2>Technologies</h2>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>GraphQL (next genetarion API)</li>
        <li>Service worker (Progressive Web App)</li>
        <li>
          Server-side rendering (SSR, Universal app)
        </li>
        <li>NodeJS, MongoDB and TypeScript for back-end server</li>
      </ul>
    </section>
  </article>
)
