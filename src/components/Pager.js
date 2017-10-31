import React from 'react'
import PropTypes from 'prop-types'

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
        this.setState({ inputValue: e.target.value })
    }

    handleBlur = (e) => {
        this.updateCurrent(e.target.value)
    }

    render() {
        return <span>
            <input type="text" onKeyPress={this.handleKeyPress} value={this.state.inputValue}
                onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} />
            /{this.props.total}
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