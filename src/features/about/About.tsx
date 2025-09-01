/**
 * TODO: add external links
 */
import { Link } from 'react-router-dom'

import { Typography } from '@mui/material'

const About = () => (
  <article>
    <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold italic">Welcome to</h2>
    <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">K&nbsp;Contact Manager</h1>
    <section className='my-4'>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Description</h3>
      <p>
        This is an example of contact manager application, implemented as separate front-end and back-end services connected via GraphQL.
      </p>
      <p>
        Such an architecture enables developers to relatively easy replace some service with another, for example if you want to replace old backend with new one using up-to-date technologies.
      </p>
    </section>
    <section className='my-4'>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Usage</h3>
      <p>
        Use top-left menu button to show navigation panel
      </p>
      {/* <strong>Mobile and tablets: </strong>You can click "Add to Home screen" in supported mobile browser's menu to install this app on your device. (Progressive web app) */}
    </section>
    <section className='my-4'>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Features</h3>
      <ul className='list-disc pl-5'>
        <li>Contact management (CRUD)</li>
        <li>Material Design</li>
        <li>Authentication</li>
        <li>Filtering</li>
        <li>Pagination (via infinite scrolling)</li>
      </ul>
      {/* </Typography> */}
    </section>
    <section className='my-4'>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Technologies</h3>
      <h4 className="text-lg md:text-xl lg:text-2xl font-bold">Front-end</h4>
      <p>
        <ul className='list-disc pl-5'>
          <li>React</li>
          <li>Redux</li>
          <li>TypeScript</li>
          <li>GraphQL (next generation API)</li>
          {/* <li>Service worker (Progressive Web App)</li> */}
        </ul>
      </p>
      <h4 className="text-lg md:text-xl lg:text-2xl font-bold">Back-end</h4>
      <p>
        <ul className='list-disc pl-5'>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>TypeScript</li>
          <li>GraphQL</li>
        </ul>
      </p>
    </section>
    <section className='text-center'>
      <Link to="/contacts" className='bg-blue-500 text-white py-2 px-4 rounded'>Go to Contacts</Link>
    </section>
  </article>
)

export default About
