import React, { Component } from 'react'

import { isDev } from '../utils'

export default class DevPage extends Component {

    componentDidMount() {
    }

    render() {
        return isDev && (
            <article>
                <h1>This is devPage</h1>
            </article>
        )
    }
}