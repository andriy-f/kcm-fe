import React from 'react'
import PropTypes from 'prop-types'

class Pager extends React.Component {
    state = {
        current: this.props.initial,
        inputValue: this.props.initial
    }

    handleFocus = (e) => {
        e.target.select()
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const newVal = e.target.value
            if (newVal > 0 && newVal <= this.props.total) {
                this.props.onChange && this.props.onChange(newVal)
                this.setState({ current: newVal })
            }
        }
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    handleBlur = (e) => {
        this.setState((prevState, props) => ({ inputValue: prevState.current }))
    }

    render() {
        return <span>
            <input type="text" onKeyPress={this.handleKeyPress} value={this.state.inputValue}
                onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChangle} />
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