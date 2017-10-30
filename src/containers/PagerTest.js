import React from 'react'

import Pager from '../components/Pager'

export default class PagerTest extends React.Component {
    onPageChange = (val) => {
        console.log('OPC', val)
    }
    render(){
        return <Pager total={10} onChange={this.onPageChange} />
    }
}