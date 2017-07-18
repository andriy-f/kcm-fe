import React, { Component } from 'react'
import Button from 'react-toolbox/lib/button'
import {} from 'jaydata/odata'

import { isDev } from '../utils'
import { factory } from '../services/JayContext'
import { BACKEND_URL } from '../config'

export default class DevPage extends Component {

    onGetContactDemoClick = () => {
        const ctx = factory({
            oDataServiceHost: BACKEND_URL + "/odata",
            withCredentials: true,
        })

        ctx.onReady((ctx2) => {
            ctx2.Contacts.toArray().then((res) => {
                console.log('contacts', res)
            })
        })
    }

    render() {
        return isDev && (
            <article>
                <h1>This is devPage</h1>
                <Button onClick={this.onGetContactDemoClick}>Hello there</Button>
            </article>
        )
    }
}