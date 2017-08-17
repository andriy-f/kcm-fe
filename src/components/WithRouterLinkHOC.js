import React from 'react'
import PropTypes from 'prop-types'

const isModifiedEvent = (event) =>
    !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

const WithRouterLinkHOC = Component =>
    class Decorated extends React.Component {
        static propTypes = {
            activeClassName: PropTypes.string,
            className: PropTypes.string,
            to: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.func
            ]),
            beforeClick: PropTypes.func
        }

        static contextTypes = {
            router: PropTypes.object
        };

        resolveToLocation = to => {
            const { router } = this.context;
            return typeof to === 'function' ? to(router.location) : to
        }

        handleClick = event => {
            if (
                !event.defaultPrevented && // onClick prevented default
                event.button === 0 && // ignore right clicks
                !this.props.target && // let browser handle "target=_blank" etc.
                !isModifiedEvent(event) // ignore clicks with modifier keys
            ) {
                const { to, beforeClick } = this.props;
                const { router } = this.context;
                event.preventDefault();
                (typeof beforeClick === 'function') && beforeClick();
                router.history.push(this.resolveToLocation(to));
            }
        }

        render() {
            const { router } = this.context;
            const { activeClassName, className, to, beforeClick, ...rest } = this.props;
            const toLocation = this.resolveToLocation(to);
            const isActive = router.history.location.pathname === toLocation;
            const _className = isActive ? `${className} ${activeClassName}` : className;

            return (
                <Component
                    {...rest}
                    className={_className}
                    href={toLocation}
                    onClick={this.handleClick}
                />
            );
        }
    }

export default WithRouterLinkHOC