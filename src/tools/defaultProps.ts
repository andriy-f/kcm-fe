import { type ComponentClass, createFactory } from 'react'

// Unused, TODO consider removing
const defaultProps = (props: object) => (BaseComponent: ComponentClass) => {
  const factory = createFactory(BaseComponent)
  const DefaultProps = (ownerProps: object) => factory(ownerProps)
  DefaultProps.defaultProps = props
  // if (process.env.NODE_ENV !== 'production') {
  //   return setDisplayName(wrapDisplayName(BaseComponent, 'defaultProps'))(
  //     DefaultProps
  //   )
  // }
  return DefaultProps
}

export default defaultProps
