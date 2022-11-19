import classNames from 'classnames'
import { createElement } from 'react'
import { ComponentType } from './component.types'
import * as styles from './component.css'

const Component: ComponentType = ({
  as = 'div',
  className,
  children,
  ...restProps
}) => createElement(
  as,
  {
    className: classNames(
      styles.wrapper,
      className,
    ),
    ...restProps,
  },
  children,
)

export default Component
