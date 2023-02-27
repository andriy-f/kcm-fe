// @flow
import debug from 'debug'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { graphql, QueryRenderer } from 'react-relay'

import ContactEdit from '../components/ContactEdit'
import environment from '../graphql/relayEnvironment'
import { appName } from '../consts'
import styles from '../App.module.css'
import RelayQueryError from './RelayQueryError'
import Contact from '../types/Contact'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactEditPage.js')

type Props = {
  contact: Contact
}
function ContactEditPage({ contact }: Props) {
  const navigate = useNavigate()

  const _handleSave = () => {
    navigate('/contacts')
  }

  const _handleCancel = () => {
    navigate('/contacts')
  }

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
          query ContactEditPageQuery ($id: ID!) {
            contact(id: $id) {
            ...ContactEdit_contact
            }
          }
        `}
      variables={{
        id: contact.id
      }}
      render={({ error, props }) => {
        if (error) {
          return <RelayQueryError error={error} />
        }

        if (!props) {
          // TODO consider use Suspense
          return <div>Loading...</div>
        }

        return (
          <article>
            <h3 className={styles.kTextCenter}>Edit Contact</h3>
            <ContactEdit contact={contact} onSave={_handleSave} onCancel={_handleCancel} />
          </article>)
      }}
    />
  )
}

export default ContactEditPage
