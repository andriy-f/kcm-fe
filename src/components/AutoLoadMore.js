// @flow
import debug from 'debug'
import React from 'react'


import { appName } from '../consts'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':AutoLoadMore.js')

type Props = {
  hasMore: boolean,
  onLoadMore(): void,
  children: any,
}

export default class extends React.Component<Props> {
  wrapperRef: any
  observer: any

  constructor(props: Props) {
    super(props)
    this.wrapperRef = React.createRef()
    if (window.IntersectionObserver) {
      this.observer = new IntersectionObserver(this._handleIntersection, {
        rootMargin: '200px'
      })
    }
  }

  componentDidMount() {
    if (window.IntersectionObserver) {
      this.wrapperRef.current && this.observer.observe(this.wrapperRef.current)
    }
  }

  _handleIntersection: IntersectionObserverCallback = (entries, observer) => {
    if (entries.some(e => e.isIntersecting)) {
      this.props.onLoadMore()
    }
  }

  render() {
    const { hasMore, children } = this.props
    return hasMore ? (
      <div ref={this.wrapperRef}>
        {children}
      </div>
    ) : null
  }
}
