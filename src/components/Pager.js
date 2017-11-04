import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from 'react-toolbox/lib/button'

import { input as pagerInputTheme, controlText } from './pager.css'

const handlerForSelectAll = e => {
    e.target.select()
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

    handleCurrentPageChange = e => {
        const intVal = getIntFromElement(e)
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
        return <span className={this.props.className} >
            <IconButton icon='first_page' onClick={this.gotoFirstPage} />
            <IconButton icon='chevron_left' onClick={this.gotoPrevPage} />
            <span className={controlText}>Page</span>
            <input type="number" min={1} max={this.props.total} className={pagerInputTheme}
                value={this.props.current}
                onFocus={handlerForSelectAll} onChange={this.handleCurrentPageChange} />
            <span className={controlText}>/ {this.props.total}</span>
            <IconButton icon='chevron_right' onClick={this.gotoNextPage} />
            <IconButton icon='last_page' onClick={this.gotoLastPage} />
        </span>
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

    handleItemsPerPageChange = e => {
        const intVal = getIntFromElement(e)
        intVal && intVal > 0
            && intVal !== this.props.itemsPerPage
            && this.props.onChange && this.props.onChange(intVal)
    }

    render() {
        return <div>
            <span className={controlText}>Items per page</span>
            <input type="number" min={1} className={pagerInputTheme} value={this.props.value}
                onFocus={handlerForSelectAll} onChange={this.handleItemsPerPageChange} />
        </div>
    }
}

ItemsPerPage.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func,
}

export { ItemsPerPage }