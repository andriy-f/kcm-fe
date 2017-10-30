import React from 'react'
import PropTypes from 'prop-types'

class Pager extends React.Component {
    state = {
        current: this.props.initial
    }
    
    onPageChange = (e) => {
        const newVal = e.target.value
        this.setState((prevState, props) => {
            if(newVal > 0 && newVal <= props.total) {
                props.onChange && props.onChange(newVal)
                return {current: newVal}
            }
        })
    }

    onFocus = (e) => {
        e.target.select()
    }

    render() {
        return <span>
            <input type="text" onChange={this.onPageChange} value={this.state.current} onFocus={this.onFocus} />
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