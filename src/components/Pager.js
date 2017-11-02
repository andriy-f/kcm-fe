import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from 'react-toolbox/lib/button'

import { input as pagerInputTheme, controlText } from './pager.css'

class Pager extends React.Component {
    state = {
        current: this.props.initial,
        inputValue: this.props.initial
    }

    updateCurrent = (newVal) => {
        if (newVal > 0 && newVal <= this.props.total) {
            this.setState({ current: newVal })
            this.props.onChange && this.props.onChange(newVal)
        }
        else {
            this.setState((prevState, props) => ({ inputValue: prevState.current }))
        }
    }

    handleFocus = (e) => {
        e.target.select()
    }

    handleKeyPress = (e) => {
        switch (e.key) {
            case 'Enter':
                e.target.blur()
                break
            default:
        }
    }

    handleChange = (e) => {
        const intVal = parseInt(e.target.value, 10)
        this.setState({ inputValue: intVal })
    }

    handleBlur = (e) => {
        const intVal = parseInt(e.target.value, 10)
        this.updateCurrent(intVal)
    }

    gotoFirstPage = e => {
        this.setState((prevState, props) => {
            const nextPageValue = 1
            const shouldUpdate = nextPageValue !== prevState.current
            shouldUpdate && props.onChange && props.onChange(nextPageValue)
            return shouldUpdate
                ? { current: nextPageValue, inputValue: nextPageValue }
                : null
        })
    }

    gotoPrevPage = e => {
        this.setState((prevState, props) => {
            const nextPageValue = prevState.current - 1
            const shouldUpdate = nextPageValue >= 1
            shouldUpdate && props.onChange && props.onChange(nextPageValue)
            return shouldUpdate
                ? { current: nextPageValue, inputValue: prevState.current - 1 }
                : null
        })
    }

    gotoNextPage = e => {
        this.setState((prevState, props) => {
            const nextPageValue = prevState.current + 1
            const shouldUpdate = nextPageValue <= props.total
            shouldUpdate && props.onChange && props.onChange(nextPageValue)
            return shouldUpdate
                ? { current: nextPageValue, inputValue: nextPageValue }
                : null
        })
    }

    gotoLastPage = e => {
        this.setState((prevState, props) => {
            const nextPageValue = props.total
            const shouldUpdate = nextPageValue !== prevState.current
            shouldUpdate && props.onChange && props.onChange(nextPageValue)
            return shouldUpdate
                ? { current: nextPageValue, inputValue: nextPageValue }
                : null
        })
    }

    render() {
        return <span className={this.props.className} >
            <IconButton icon='first_page' onClick={this.gotoFirstPage} />
            <IconButton icon='chevron_left' onClick={this.gotoPrevPage} />
            <span className={controlText}>Page</span>
            <input type="text" label="Filter" className={pagerInputTheme} onKeyPress={this.handleKeyPress} value={this.state.inputValue}
                onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} />
            <span className={controlText}>/ {this.props.total}</span>
            <IconButton icon='chevron_right' onClick={this.gotoNextPage} />
            <IconButton icon='last_page' onClick={this.gotoLastPage} />
        </span>
    }
}

Pager.propTypes = {
    total: PropTypes.number.isRequired,
    initial: PropTypes.number,
    onChange: PropTypes.func,
}

Pager.defaultProps = {
    initial: 1,
}

export default Pager