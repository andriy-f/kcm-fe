// @flow
import debug from 'debug'
import React from 'react'
import { graphql } from 'react-relay'

import NarrowLayout from '../components/NarrowLayout'
import ContactView from '../components/ContactView'
import { appName } from '../consts'
import styles from '../App.module.css'
import Contact from '../types/Contact'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactViewPage.js')

type Props = {
  contact: Contact
}

function ContactViewPage(props: Props) {

  const _handleGoBack = () => {
  }

  const data = graphql`
          query ContactViewPageQuery ($id: ID!) {
            contact(id: $id) {
            ...ContactView_contact
            }
          }
        `

  return (
    <NarrowLayout>
      <h2 className={styles.kTextCenter}>Contact</h2>
      <ContactView contact={(data as any).contact} onGoBack={_handleGoBack} />
    </NarrowLayout>)


}

export default ContactViewPage
