import React, { Component } from 'react'

import PagerTest from '../containers/PagerTest'
import { isDev } from '../utils'

export default class DevPage extends Component {

    componentDidMount() {
    }

    render() {
        return isDev && (
            <article>
                <h1>This is devPage</h1>
                <PagerTest />
            </article>
        )
    }
}