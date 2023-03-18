import debug from 'debug'
import React from 'react'

import { appName } from '../consts'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = debug(appName + ':AutoLoadMore.js')

type Props = {
  hasMore: boolean,
  onLoadMore(): void,
  children: any,
}

export default class AutoLoadMore extends React.Component<Props> {
  wrapperRef: React.RefObject<HTMLDivElement>
  observer: IntersectionObserver | null = null

  constructor(props: Props) {
    super(props)
    this.wrapperRef = React.createRef()
    if (window.IntersectionObserver) {
      this.observer = new IntersectionObserver(this._handleIntersection, {
        rootMargin: '300px'
      })
    }
  }

  componentDidMount() {
    if (this.observer && this.wrapperRef?.current) {
      this.observer.observe(this.wrapperRef.current)
    }
  }

  componentWillUnmount() {
    if (this.observer && this.wrapperRef?.current) {
      this.observer.unobserve(this.wrapperRef.current)
    }
  }

  _handleIntersection: IntersectionObserverCallback = (entries, observer) => {
    if (entries.some(e => e.isIntersecting)) {
      this.props.onLoadMore()
    }
  }

  render() {
    const { hasMore, children } = this.props
    return (
      <div ref={this.wrapperRef}>
        {hasMore && children}
      </div>
    )
  }
}
