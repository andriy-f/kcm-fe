import debug from 'debug'
import { graphql, createFragmentContainer } from 'react-relay'

import { appName } from '../consts'
import ContactEditForm from '../components/ContactEditForm'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactEdit.js')

export default createFragmentContainer(
  ContactEditForm,
  graphql`
    fragment ContactEdit_contact on Contact {
      id
      firstName
      lastName
      email
      phoneNumber
    }
`)
