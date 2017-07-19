import React, { Component } from 'react'

import { isDev } from '../utils'
import { factory } from '../services/JayContext'

export default class DevPage extends Component {

    componentDidMount() {
        factory()
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