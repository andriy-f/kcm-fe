import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'react-toolbox/lib/input'
import { IconButton } from 'react-toolbox/lib/button'

import { input, controlText } from './pager.css'

const handlerForSelectAll = e => {
    e.target.select()
}

const getIntFromRTElement = value => {
    if (!value) {
        return
    }

    return parseInt(value, 10)
}

const getIntFromElement = e => {
    const textValue = e.target.value
    if (!textValue) {
        return
    }

    return parseInt(textValue, 10)
}

class Pager extends React.Component {
    tryUpdateCurrentPage = newVal => {
        newVal >= 1 && newVal <= this.props.total
            && newVal !== this.props.current
            && this.props.onChange && this.props.onChange(newVal)
    }

    handleCurrentPageChange = value => {
        const intVal = getIntFromElement(value)
        intVal && this.tryUpdateCurrentPage(intVal)
    }

    gotoFirstPage = () => {
        this.tryUpdateCurrentPage(1)
    }

    gotoPrevPage = () => {
        this.tryUpdateCurrentPage(this.props.current - 1)
    }

    gotoNextPage = e => {
        this.tryUpdateCurrentPage(this.props.current + 1)
    }

    gotoLastPage = e => {
        this.tryUpdateCurrentPage(this.props.total)
    }

    render() {
        return <div className={this.props.className} >
            <IconButton icon='first_page' onClick={this.gotoFirstPage} />
            <IconButton icon='chevron_left' onClick={this.gotoPrevPage} />
            <input type="number" min={1} max={this.props.total} className={input}
                /* label={`page of ${this.props.total}`} */
                value={this.props.current}
                onFocus={handlerForSelectAll} onChange={this.handleCurrentPageChange} />
            {<span className={controlText}>/ {this.props.total}</span>}
            <IconButton icon='chevron_right' onClick={this.gotoNextPage} />
            <IconButton icon='last_page' onClick={this.gotoLastPage} />
        </div>
    }
}

Pager.propTypes = {
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    onChange: PropTypes.func,
}

export default Pager

// ItemsPerPage component

class ItemsPerPage extends React.Component {

    handleItemsPerPageChange = value => {
        const intVal = getIntFromRTElement(value)
        typeof intVal !== 'undefined' && intVal >= 1
            && intVal !== this.props.itemsPerPage
            && this.props.onChange && this.props.onChange(intVal)
    }

    render() {
        return <div>
            <Input type="number" min={1} label="Items per page" value={this.props.value}
                onFocus={handlerForSelectAll} onChange={this.handleItemsPerPageChange} />
        </div>
    }
}

ItemsPerPage.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func,
}

export { ItemsPerPage }