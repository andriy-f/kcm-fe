// @flow
import debug from 'debug'
import React from 'react'
import { graphql, QueryRenderer, usePreloadedQuery } from 'react-relay'
import { Link, useLoaderData } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'

import FilteringScrollingContactsTable from '../containers/FilteringScrollingContactsTable'
import environment from '../graphql/relayEnvironment'
import { appName } from '../consts'
import styles from '../App.module.css'
import RelayQueryError from './RelayQueryError'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactsPage.js')

type Props = {
  readonly?: boolean
}
function ContactsPage(props: Props) {
  const preloaded = useLoaderData()
  const data = usePreloadedQuery(graphql`
          query ContactsPageQuery {
            ...FilteringScrollingContactsTable_contactsData
          }
        `, preloaded as any) // todo
    return (
            <article className={styles.contactsPage}>
              <FilteringScrollingContactsTable contactsData={data} relay={null} readonly={!!props.readonly} />
              <div className={styles.addItemButtonContainer}>
                <Link to="/contacts/new"><AddIcon /></Link>
              </div>
            </article>)
  }

export default ContactsPage
