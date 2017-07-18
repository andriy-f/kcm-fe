import React, { Component } from 'react'
import { } from 'jaydata/odata'

import { isDev } from '../utils'
import { factory } from '../services/JayContext'
import { BACKEND_URL } from '../config'

export default class DevPage extends Component {

    componentDidMount() {
        factory({
            oDataServiceHost: BACKEND_URL + "/odata",
            withCredentials: true,
            crossDomain: true,
        })
            .onReady()
            .then(ctx => ctx.Contacts.toArray())
            .then(contacts => {
                console.log('contacts:', contacts)
            })
            .catch(err => {
                console.error('ERR:', err)
            })
    }

    render() {
        return isDev && (
            <article>
                <h1>This is devPage</h1>
            </article>
        )
    }
}